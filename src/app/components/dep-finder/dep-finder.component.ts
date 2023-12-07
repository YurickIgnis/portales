import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LocalDep, Naturaleza } from 'src/app/services/interfaces/dep.local.api.interface';

@Component({
  selector: 'app-dep-finder',
  templateUrl: './dep-finder.component.html',
  styleUrls: ['./dep-finder.component.scss']
})
export class DepFinderComponent implements OnChanges {
  
  localApi: LocalDep[] = [];
  localFilterApi: LocalDep[] = [];

  @Input()
  depArray: string[] = [];

  @Output() depEvent = new EventEmitter<string>();

  constructor(private api: ApiService) {

    this.api.getRawLocalDepApi().subscribe(data => {
      this.localApi = [{
        id:           0,
        codigo:       null,
        nombre:       "Todas las dependencias",
        siglas:       "",
        naturaleza:   Naturaleza.Empty,
        idPadre:      0,
        esAMR:        null,
        amrId:        null,
        amrAlternaId: null,
        sector_CatId: null,
        activo:       true
      }];

      this.localApi.push(...data.map(p => {
        return p
      }).sort((a, b) => {
          if (a.nombre < b.nombre) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
      }));

      this.depArray.push("Todas las dependencias");
      this.localFilterApi = this.localApi.filter((obj) => {
        return this.depArray.includes(obj.nombre);
      });
      console.log(this.localFilterApi);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.localApi.length > 0){
      this.depArray.push("Todas las dependencias");
      this.localFilterApi = this.localApi.filter((obj) => {
        return this.depArray.includes(obj.nombre);
      });
      console.log(this.localFilterApi);
    }
  } 


  setValue(arg0: string) {
    this.depEvent.emit(arg0);
  }
}
