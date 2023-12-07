import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { FetchInfoTramite, OﬁcinasAtencion, Fundamento, Formato, Requisito } from 'src/app/services/interfaces/api.interfaces';


@Component({
  selector: 'app-detalle-tramite',
  templateUrl: './detalle-tramite.component.html',
  styleUrls: ['./detalle-tramite.component.scss']
})
export class DetalleTramiteComponent {
  private sub: any;
  private homoclave!: string;
  tramite: FetchInfoTramite = {} as FetchInfoTramite;
  data_aux: OﬁcinasAtencion[] = [];
  loadingData: boolean = false;
  fechaFormateada: string = "";
  // expanded: boolean = false;
  expanded: { [key: number]: boolean } = {};
  // isCollapsed = false;


  funList: string[] = [
    'OrigenTramite',
    'CanalAtencion',
    'Formato',
    'Requisitos',
    'ConservarInformacion',
    'Montos',
    'CriterioResolucion',
    'InspeccionVerificacion',
    'PPrevenirSolicitante',
    'PCumplirPrevencion',
    'PlazoMaximo',
    'Vigencia'
  ];


  // Objeto para almacenar el estado de colapso de cada requisito
  isCollapsed: { [key: number]: boolean } = {};

  currentAccordionIndex: number | null = null;
  // currentAccordionIndex: number | null = 1;


  getPhoneNumber(input: string): string {
    // Busca el número de teléfono en la cadena
    const phoneNumberMatch = input.match(/\d+/);
    // Verifica si se encontró un número de teléfono
    if (phoneNumberMatch) {
        return phoneNumberMatch[0];
    } else {
        // Si no se encontró un número, retorna la cadena original
        return input;
    }
}

  constructor(config: NgbAccordionConfig, private route: ActivatedRoute, private api: ApiService,private locationStrategy: LocationStrategy) { 
    config.closeOthers = false;
    config.type = 'secondary';

    
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.homoclave = params['homoclave'];
    });

    
      this.api.getDetailTramite(this.homoclave).subscribe(data => {
        this.tramite = data;
        this.data_aux = this.tramite.oﬁcinasAtencion.filter(
          (valor, i, self) => self.findIndex(obj => obj.nombre === valor.nombre) === i
        );
        this.fechaFormateada = this.formatDate(this.tramite.fechaActualizacion);
        this.loadingData = true;

        // Inicializa el estado de colapso de cada requisito en 'false' por defecto
        for (const requisito of this.tramite.requisitos) {
          this.isCollapsed[requisito.requisitoId] = true;
        }
      });
  }

  formatDate(fecha:String ): string {
    const dateParts = fecha.split("/").map(Number);
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    const fechaFormateada = new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(new Date(date));

    return fechaFormateada;
  }

  // Se formatea el monto dependiendo del valor de la moneda
  formatearMonto(monto: string, moneda: string): string {
    if (monto && moneda) {
      if (monto.includes('-')) {
        // Es un rango de montos
        const montos = monto.split(' - ');
        return montos.map(m => this.formatearMonto(m, moneda)).join(' - ');
      } else {
        // Es un monto simple
        switch (moneda) {
          case 'Pesos Mexicanos':
            return '$ ' + monto;
          case 'Dólar':
            return 'US$ ' + monto;
          case 'Euro':
            return '€ ' + monto;
          case 'Unidades de Inversión (UDI)':
            return monto + ' UDIS';
          case 'Actualización (UMA)':
            return monto + ' UMA';
          default:
            return monto;
        }
      }
    }
    return '';
  }
  
  // Función para limpiar el valor de respuestaResolver
  limpiarPlazo(plazo: string): string {
    // Verificar si el plazo comienza con '1 ' y eliminarlo
    if (plazo.startsWith('1 ')) {
      return plazo.substr(2);
    }
    // Si no comienza con '1 ', devolver el valor original
    return plazo;
  }

  // Método para cambiar el estado de colapso de un requisito específico
  toggleCollapse(requisitoId: number): void {
    this.isCollapsed[requisitoId] = !this.isCollapsed[requisitoId];
  }

  // toggleExpanded(): void {
  //   this.expanded = !this.expanded;
  // }

  toggleExpanded(index: number): void {
    this.expanded[index] = !this.expanded[index];
  }


 

  // Modify the toggleAccordion method
  toggleAccordion(index: number): void {
    if (this.currentAccordionIndex === index) {
      this.currentAccordionIndex = null; // Close the currently open accordion
    } else {
      this.currentAccordionIndex = index; // Open the clicked accordion
    }
  
    // Reset expanded for all accordions
    for (let i = 1; i <= 6; i++) {
      this.expanded[i] = this.currentAccordionIndex === i;
    }
  }


  




  
  getBaseHref(): string {
    return this.locationStrategy.getBaseHref();
  }

  getPanelTitle(prefix: string): string {
    return `${prefix} ${this.tramite.tramiteServicio === 'Trámite' ? 'TRÁMITE' : 'SERVICIO'}?`;
  }

  getPanelNoTitle(prefix: string): string {
    return `${prefix} ${this.tramite.tramiteServicio === 'Trámite' ? 'TRÁMITE' : 'SERVICIO'}`;
  }

  getDatosAdicionales(fundamento: Fundamento): string {
    let datosAdicionales = "";
    if (fundamento.tipo === "CanalAtencion" && fundamento.canalAtencionId) {
      // Busca el ID en la lista de opciones de realizar trámite
      const opcion = this.tramite.opcionesRealizarTramite.find(
        (opcion) => opcion.canalAtencionId === fundamento.canalAtencionId
      );
      

      if (opcion) {
        datosAdicionales = opcion.opcionRealizarTramite;
      }
    } else if (fundamento.tipo === "Formato" && fundamento.formatoId) {
      // Busca el ID en la lista de formatos
      const formato = this.tramite.formatos.find(
        (formato) => formato.formatoId === fundamento.formatoId
      );

      if (formato) {
        datosAdicionales = formato.nombre;
      }
    } else if (fundamento.tipo === "Requisitos" && fundamento.requisitoId) {
      // Busca el ID en la lista de requisitos
      const requisito = this.tramite.requisitos.find(
        (requisito) => requisito.requisitoId === fundamento.requisitoId
      );

      if (requisito) {
        datosAdicionales = requisito.nombre;
      }
    }

    return datosAdicionales;
  }


  formatTiempoPromedio(dias: number, horas: number, minutos: number): string {
    const parts = [];
  
    if (dias > 0) {
      parts.push(`${dias} día${dias > 1 ? 's' : ''}`);
    }
  
    if (horas > 0) {
      parts.push(`${horas} hora${horas > 1 ? 's' : ''}`);
    }
  
    if (minutos > 0) {
      parts.push(`${minutos} minuto${minutos > 1 ? 's' : ''}`);
    }
  
    if (parts.length === 0) {
      return 'No disponible';
    }
  
    return parts.join(' y ');
  }
  
}
