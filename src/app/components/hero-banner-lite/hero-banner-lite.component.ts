import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map, merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hero-banner-lite',
  templateUrl: './hero-banner-lite.component.html',
  styleUrls: ['./hero-banner-lite.component.scss']
})
export class HeroBannerLiteComponent  implements OnInit, OnDestroy{


  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();

  localApi: string[] = [];

  form: FormGroup;

  model: any;

  @Input()
  word: string = "";

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
		const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
		const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
		const inputFocus$ = this.focus$;

		return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
			map((term: string) =>
				(term === '' ? this.localApi : this.localApi.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
			),
		);
	};


  constructor(private router:Router, private api: ApiService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      tag: new FormControl('', Validators.minLength(1))
    });

  }


  ngOnInit() {
    //console.log('WORD:' + this.word);
/*     this.form.setValue({
      tag: this.word
    }); */

    console.log(this.word);

    this.api.getLocalDepApi().subscribe(data => {
      this.localApi = data;
      //console.log(data)
    });
  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }


  onSubmit(): void {
    //console.log(this.form.value.tag);
    this.router.navigate(['buscador/'+this.form.value.tag]).then(() =>
    {
      window.location.reload();
    });
  }

}
