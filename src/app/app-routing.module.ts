import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoComponent } from './pages/aviso/aviso.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { DetalleTramiteComponent } from './pages/detalle-tramite/detalle-tramite.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component'; // Asegúrate de importar correctamente el componente de ayuda

const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'buscador/:text', component : BusquedaComponent},
  {path : 'detalles/:homoclave', component: DetalleTramiteComponent},
  {path : 'aviso', component: AvisoComponent},
  {path : 'ayuda', component: AyudaComponent} // Agrega la ruta para el componente de ayuda
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
