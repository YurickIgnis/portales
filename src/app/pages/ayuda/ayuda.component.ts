import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent implements OnInit {
  acordeones: any[] = [];
  datosCargados: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/public_api.json').subscribe(
      data => {
        this.acordeones = data.publicApi.acordeones;
        this.datosCargados = true;
        // Asegúrate de que se estén cargando los datos correctamente imprimiendo los datos en la consola
        console.log(this.acordeones);
      },
      error => {
        console.error('Error al obtener los datos del archivo JSON', error);
      }
    );
  }
}
