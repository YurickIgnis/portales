export interface Sectores {
    data:       Datum[];
    totalItems: number;
    pageNumber: number;
    rows:       number;
}

export interface Datum {
    id:            number;
    num_scian:     string;
    nombre:        string;
    listatramites: Listatramite[];
}

export interface Listatramite {
    id:        number;
    homoclave: string;
    nombre:    string;
    modalidad: string;
}
