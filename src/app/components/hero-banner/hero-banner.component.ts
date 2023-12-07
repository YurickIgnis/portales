import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map, merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { LocalDep } from 'src/app/services/interfaces/dep.local.api.interface';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit{

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();

  localApi: string[] = [];

  form: FormGroup;

  model: any;

  /* search = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.localApi.filter((v) => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10),
			),
		); */


    search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
      const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
      const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
      const inputFocus$ = this.focus$;

      return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
        map((term) =>
          (term === "" ? this.localApi : this.localApi.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 5),
        ),
      );
    };

  constructor(private router:Router, private api: ApiService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      tag: new FormControl('', Validators.minLength(1))
    });

   }

  ngOnInit(): void {

    this.api.getLocalDepApi().subscribe(data => {
      this.localApi = data;
      //console.log(data)
    });
  }

  

  onSubmit(): void {
    //console.log(this.form.value.tag);
    this.router.navigateByUrl('buscador/'+this.form.value.tag);
  }
}

