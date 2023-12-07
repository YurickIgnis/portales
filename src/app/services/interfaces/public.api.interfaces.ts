import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface PublicAPI {
    publicApi: PublicAPIClass;
}

export interface PublicAPIClass {
    cintillo: Cintillo[];
    sectores: Sectore[];
    footera:   Footer[];
    footerb:   Footer[];
    footerc:   Footer[];
    bot_footer: Footer[];
    infografia: Inforgrafia[];
    acordeones: Acordeones[]; // Agregando la interfaz Acordeones
}

export interface Cintillo {
    link: string;
    data: IconName;
    tipo: string;
}

export interface Footer {
    texto: string;
    link:  string;
}

export interface Sectore {
    id:    number;
    icono: IconName;
}

export interface Inforgrafia {
    text: string;
    iconPrex: IconPrefix;
    icon: IconName;
    link: string;
    modalText: string;
}

export interface Acordeones {
    id: number;
    pregunta: string;
    respuesta: string;
}
