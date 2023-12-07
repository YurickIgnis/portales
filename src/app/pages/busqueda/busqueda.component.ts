import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataTamite, FindTram } from 'src/app/services/interfaces/tram.api.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit, OnDestroy {
  private sub:any;
  busqueda!: string;
  type: string = "";
  tramites!: any[];
  loadingData:boolean = false;


  constructor(private route: ActivatedRoute, private api: ApiService) {}


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        //console.log(params);
      }
    );
    
    this.sub = this.route.params.subscribe(params => {
      this.busqueda = params['text'];

      /* this.loadingData = false; */
      /* this.api.getRecursiveAllTramites(this.busqueda).then(
        data => {
          console.log(data);
          this.tramites = data;
          this.loadingData = true;
        }
      ).catch(error => console.error(error)); */

    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
