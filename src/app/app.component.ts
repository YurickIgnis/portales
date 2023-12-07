import { Component, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './services/api.service';
import { Dependencia } from './services/interfaces/dep.api.interface';
import { PublicAPI } from './services/interfaces/public.api.interfaces';
import { Datum } from './services/interfaces/sec.api.interface';
import { Estadisticas } from './services/interfaces/statistics.api.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rutys-dev';
  @Input()
  loadingData: boolean;
  @Input()
  stats!: Estadisticas;


  @Input()
  sectors!: Datum[];


  @Input()
  depend!: Dependencia[];

  pubApi!: PublicAPI;


  async getPublicData() {
    this.pubApi = await firstValueFrom(this.api.getPublicInfo());
  }

  constructor(private api: ApiService) {
    this.loadingData = false;
    this.getPublicData();
  }

  async ngOnInit(): Promise<void> {

      this.api.getWeekStats().subscribe(data => {
        this.stats = data;
      });

  }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }
}
