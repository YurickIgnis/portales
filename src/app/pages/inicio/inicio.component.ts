import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Dependencia } from 'src/app/services/interfaces/dep.api.interface';
import { PublicAPI, Sectore } from 'src/app/services/interfaces/public.api.interfaces';
import { Datum } from 'src/app/services/interfaces/sec.api.interface';
import { Estadisticas } from 'src/app/services/interfaces/statistics.api.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {

  @Input()
  loadingStatsData: boolean;
  @Input()
  stats!: Estadisticas;


  @Input()
  sectors!: Datum[];


  @Input()
  depend!: Dependencia[];
  pubApi!: PublicAPI;

  
  async getPublicData() {
    this.pubApi = await firstValueFrom(this.api.getPublicInfo());
    //console.log(this.pubApi);  
  }

  constructor(private api: ApiService) {
    this.loadingStatsData = false;
    this.getPublicData();
  }

  ngOnInit(): void {

      this.api.getWeekStats().subscribe(data => {
        this.stats = data;
        this.loadingStatsData = true;
      });

/*     this.api.getRecursiveAllSectors().then(
      data => {
        this.sectors = data;
        console.log(data);
      }
    ).catch(error => console.error(error)); */
/* 
    this.api.getRecursiveAllDependencias().then(
      data => {
        this.depend = data;
        console.log(data);
      }
    ).catch(error => console.error(error)); */

  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

}
function getPublicData() {
  throw new Error('Function not implemented.');
}

