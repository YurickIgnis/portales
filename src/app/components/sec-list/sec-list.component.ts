import { Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { PublicAPI } from 'src/app/services/interfaces/public.api.interfaces';
import { Datum } from 'src/app/services/interfaces/sec.api.interface';

@Component({
  selector: 'app-sec-list',
  templateUrl: './sec-list.component.html',
  styleUrls: ['./sec-list.component.scss']
})
export class SecListComponent {

  @Input()
  sectors!: Datum[];

  @Input()
  pubApi!: PublicAPI;

  getIcon(id: number) : IconName {
    return this.pubApi.publicApi.sectores.filter(x => x.id == id)[0].icono;
  }

}
