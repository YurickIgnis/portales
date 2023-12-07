
export interface Estadisticas {
    totalVisitastramites:       number;
    totalVisitasInspecciones:   number;
    totalVisitasInspectores:    number;
    totalVisitasRegulaciones:   number;
    totalTramitesPub:           number;
    totalInspeccionespub:       number;
    totalInspectoresPub:        number;
    totalRegulacionesPub:       number;
    totaltraEnlinea:            number;
    totaltraPresencial:         number;
    totaltraMediosAlternativos: number;
    totalDependencias:          number;
    ultimoModiTramite:          UltimoMod;
    ultimoModInspeccion:        UltimoMod;
    ultimoModInspector:         null;
    ultimoModRegulacion:        UltimoMod;
}

export interface UltimoMod {
    id:                number;
    homoclave:         null | string;
    nombre:            string;
    fechaModificacion: string;
}
