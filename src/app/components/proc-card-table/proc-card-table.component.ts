import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataTamite } from 'src/app/services/interfaces/tram.api.interface';

@Component({
  selector: 'app-proc-card-table',
  templateUrl: './proc-card-table.component.html',
  styleUrls: ['./proc-card-table.component.scss']
})
export class ProcCardTableComponent implements OnInit{

  @Input() 
  palabra: string = "";
  page: number = 0;
  sTramites: DataTamite[] = [];
  sTramitesFiltrados: DataTamite[] = [];
  isLoading: boolean = true;
  maxPage: number = 999;
  siglasDep: string = ""
  isScrollLoadiong: boolean = false;
  allResults: boolean = false;
  depFinder: string[] = [];

/*   public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    screenReaderPaginationLabel: 'Paginación',
    screenReaderPageLabel: 'Página',
    screenReaderCurrentLabel: `Estás en la página`
  }; */


  constructor(private api: ApiService)  {}


  selectDep(event: string) {
    this.siglasDep = event;
    this.sTramitesFiltrados = this.sTramites.filter(t => t.homoclave.includes(this.siglasDep));
  }

  ngOnInit() {
    
    this.isLoading = true;
    this.api.getRawFindTramites(this.palabra, ++this.page).subscribe(resp => {
      this.maxPage = (resp.totalItems / 10) + 1;
      this.isLoading = false;
      this.sTramites = resp.data;
      this.sTramitesFiltrados = this.sTramites.filter(t => t.homoclave.includes(this.siglasDep));
      this.depFinder = Array.from(new Set(resp.data.map(obj => obj.sujetoObligado)));
      console.log(this.depFinder);
      console.log(this.sTramites);
    });

  }

  onScroll(): void {
    
    if(this.maxPage > this.page) {
      this.isScrollLoadiong = true;
      this.api.getRawFindTramites(this.palabra, ++this.page).subscribe(resp => {
        this.isScrollLoadiong = false;
        this.sTramites.push(...resp.data);
        this.sTramitesFiltrados = this.sTramites.filter(t => t.homoclave.includes(this.siglasDep));

        const newdepFinder = Array.from(new Set(resp.data.map(obj => obj.sujetoObligado)));
        this.depFinder = Array.from(new Set([...this.depFinder, ...newdepFinder]));
        console.log(this.depFinder);
      });
    } else if(this.isScrollLoadiong === false){
      this.allResults = true;
    }
  }

}
