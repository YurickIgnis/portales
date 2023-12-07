import { Pipe, PipeTransform } from '@angular/core';
import { Fundamento, OFund } from '../interfaces/api.interfaces';


const funList: string[] = [
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

@Pipe({
  name: 'fundamentos'
})

export class FundamentosPipe implements PipeTransform {

  transform(value: Fundamento[]): any {

    let nuevo: ObjetoConIndice = {};
    let fundamentosOrdenados: OFund[] = [];
    
    value.forEach ( x => {

      if(!fundamentosOrdenados.some(e => e.tipo === x.tipo)) {
        fundamentosOrdenados.push({
          tipo: x.tipo,
          nfund: []
        })
      }

      const ofund = fundamentosOrdenados.find(e => e.tipo === x.tipo);
      if(!ofund?.nfund.some(e => e.nombre === x.nombreOrdenamiento)) {
        ofund?.nfund.push({
          nombre: x.nombreOrdenamiento,
          fund: []
        })
      }

      const fundamento = ofund?.nfund.find(e => e.nombre === x.nombreOrdenamiento);
      fundamento?.fund.push(x);
    });

    fundamentosOrdenados.sort((a, b) => {
      return funList.indexOf(a.tipo) - funList.indexOf(b.tipo);
    });
    //console.log(fundamentosOrdenados);
    return fundamentosOrdenados;
    //return Object.values(nuevo);
  }
}

interface ObjetoConIndice {
  [key: number]: any;
}
