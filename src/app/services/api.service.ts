import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FecthAPIKey, FetchAllTramites } from './interfaces/api.interfaces';
import { FetchPublicAPI } from './interfaces/public.api.interface';
import { from, lastValueFrom, map, of } from 'rxjs';
import { Dependencia, DependenciasAPITs } from './interfaces/dep.api.interface';
import { Estadisticas } from './interfaces/statistics.api.interface';
import { Datum, Sectores } from './interfaces/sec.api.interface';
import { FindTram } from './interfaces/tram.api.interface';
import { PublicAPI } from './interfaces/public.api.interfaces';
import { LocalDep } from './interfaces/dep.local.api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getRecursiveAllDependencias() {
    let dep: Dependencia[] = [];
    var index = 1;


    const makeRequest = async (): Promise<Dependencia[]> => {
      const resp = await lastValueFrom(this.getDependencias(index));


      dep = dep.concat(resp.data);
      if((index*10) < resp.totalItems) {
        index++;
        return makeRequest();
      } else {
        return dep;
      }
    }

    return makeRequest();
  }


  getRecursiveAllTramites(frase: string) {
    let tramites: any[] = [];
    var index = 1;

    const makeRequest = async(): Promise<any> => {
      const resp = await lastValueFrom(this.getFindTramites( frase, index));

      tramites = tramites.concat(resp.tramites);

      if((index*10) < resp.totalITems) {
        index++;
        return makeRequest();
      } else {
        return tramites;
      }

    }

    return makeRequest();
  }

  getRawFindTramites(frase: string, index: number) {
    const makeRequest = async(): Promise<FindTram> => {
      const resp = await lastValueFrom(this.getFindTramitesRaw(frase, index));

      return resp;
    }
    return from(makeRequest());
  }

  getFindTramites(frase:string, index: number) {
    return this.http.get<FindTram> (
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/busqueda/"+frase+"/"+index,
    ).pipe(
      map( this.tranformAllTramitesIntoCard )
    );
  }



  getFindTramitesRaw(frase:string, index: number) {
    return this.http.get<FindTram> (
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/busqueda/"+frase+"/"+index, 
    );
  }

  getRecursiveAllSectors() {

    let sectores: Datum[] = [];
    var index = 1;


    const makeRequest = async (): Promise<Datum[]> => {
      // const token = await lastValueFrom(this.getToken());
      const resp = await lastValueFrom(this.getSectores(index));

      sectores = sectores.concat(resp.data);
      if((index*10) < resp.totalItems) {
        index++;
        return makeRequest();
      } else {
        return sectores;
      }
    }

    return makeRequest();
  }

  getToken() {

    const json_body = JSON.stringify({
      "Usuario": "sedeco_emunoz@slp.gob.mx",
      "Password": "zRkWjNYBVq",
      "Tipo": "Correo",
      "Ip": "0.0.0.0"
    });
    

    return this.http.post<FecthAPIKey>(
      "https://catalogonacional.gob.mx/sujetosobligados/api/login",
      json_body,
      {headers: new HttpHeaders({
        'Accept': '*/*',
        'Content-Type': 'application/json'
      })}
    );
  }

  // getAllTramites(auth_token:string) {
  //   return this.http.get<FetchAllTramites[]>(
  //     "https://catalogonacional.gob.mx/sujetosobligados/api/Consultar/TramitesEntidad/24",
  //     {headers: new HttpHeaders({
  //       'Authorization': `Bearer ${auth_token}`
  //     })}
  //   ).pipe(
  //     map( this.tranformAllTramitesIntoCard )
  //   );
  // }

  getDetailTramite(homoclave:string) {
    return this.http.get<any>(
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/Tramites/ficha/publica/actual/"+homoclave,
      
    );
  }


  getPublicDetailTramite(homoclave:string) {
    return this.http.get<FetchPublicAPI>(
      "https://catalogonacional.gob.mx/api/ficha_tramite/"+homoclave
      // {headers: new HttpHeaders({
      //   'Access-Control-Allow-Origin':'*',
      // })}
    );
  }

  getDependencias(index: number) {
    return this.http.get<DependenciasAPITs> (
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/Dependencias/paginado/all/"+index,
    );
  }

  getWeekStats() {
    return this.http.get<Estadisticas> (
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/Estadisticas/semanal",
      
    );
  }

  getDayStats() {
    return this.http.get<Estadisticas> (
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/Estadisticas/diario",
      
    );
  }

  getMonthStats() {
    return this.http.get<Estadisticas> (
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/Estadisticas/mensual",
     
    );
  }

  getSectores(index: number) {
    return this.http.get<Sectores> (
      "https://5f2zg9t549.execute-api.us-east-1.amazonaws.com/produccion/api/Sectores/paginado/all/"+index,
      
    ).pipe(map (this.getSectoresConTramites) );
  }

  private getSectoresConTramites(resp: Sectores) {
    var sectores = resp;

    const itemListReduce: Datum[] = resp.data.filter((obj, i) => {
      return obj.listatramites.length > 0;
    });
    sectores.data = itemListReduce;

    return sectores;
  }


  private tranformAllTramitesIntoCard(resp: FindTram ) {
    //console.log(resp);


    const itemList: any[] = resp.data.map( data => {
      //console.log(data);
      return {
        title: data.nombre,
        subtitle:"",
        texto: data.categoria,
        chips: [],
        btn_text: "MÁS INFORMACIÓN",
        homoclave: data.homoclave,
        totalItems: resp.totalItems
      }
    });

    const item: any = {
      totalITems: resp.totalItems,
      tramites: itemList
    }
    
    return item;
  }

  getPublicInfo() {
    return this.http.get<PublicAPI>('/assets/public_api.json');
  }


  ordenamientoDependencias(values:LocalDep[]) {

    const itemList: string[] = values.map(p => {
      return p.nombre
    }).sort((a, b) => {
        if (a< b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
    });

    return itemList;
  }

  getLocalDepApi() {
    return this.http.get<LocalDep[]>('/assets/dep.json')
    .pipe(
      map( this.ordenamientoDependencias )
    );
  }

  getRawLocalDepApi() {
    return this.http.get<LocalDep[]>('/assets/dep.json');
  }
}

//panificacion a largo plazo.
//changelist
//Lunes y martes
//
