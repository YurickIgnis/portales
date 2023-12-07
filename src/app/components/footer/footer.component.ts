import { Component, Input } from '@angular/core';
import { PublicAPI } from 'src/app/services/interfaces/public.api.interfaces';
import { Estadisticas } from 'src/app/services/interfaces/statistics.api.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input()
  stats!: Estadisticas;

  @Input()
  pubApi!: PublicAPI;


  formatDate(fecha: string ): string {

    const dateParts = fecha.split("/").map(Number);
    const date = new Date(fecha);

    const fechaFormateada = new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(new Date(date));

    return fechaFormateada;
  }

}
