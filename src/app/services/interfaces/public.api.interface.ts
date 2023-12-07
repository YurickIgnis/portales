// Generated by https://quicktype.io

export interface FetchPublicAPI {
    tra_Tramites:                   TraTramites;
    tra_TramiteTipo:                TraNivelGobierno;
    master_Dependencia:             MasterDependencia;
    master_Unidades_Administrativa: MasterUnidadesAdministrativa;
    tra_NivelGobierno:              TraNivelGobierno;
    formatos:                       Formato[];
    tramiteTotals:                  Total[];
    canalesDeAccionTotals:          Total[];
    responsableTotals:              Total[];
    datosComplementarios:           any[];
    tramite_Fundamentos:            TramiteFundamento[];
    traCanalesAtencion:             TraCanalesAtencion[];
    tra_DocumentosRequisitos:       TraDocumentosRequisito[];
    tra_fundamentos_juridicos:      any[];
    tra_Montos:                     TraMonto[];
    tra_criteriosResolucion:        any[];
    tra_Plazos:                     TraPlazo[];
    tra_Resolucion:                 TraResolucion[];
    tra_quienSolicita:              TraQuienSolicita[];
    tra_InformacionComplementaria:  any[];
    usuarioTramites:                UsuarioTramite[];
    misUnidades:                    MasterUnidadesAdministrativa[];
}

export interface Total {
    totalCount:  number;
    tituloView:  null | string;
    description: string;
    htmlId:      string;
    isVisible:   boolean;
    acciones:    Accione[] | null;
}

export interface Accione {
    accion: string;
    orden:  number;
    tipo:   Tipo;
}

export enum Tipo {
    AccionesOtro = "AccionesOtro",
    AccionesPresencial = "AccionesPresencial",
    AccionesWeb = "AccionesWeb",
}

export interface Formato {
    id:                   number;
    sePresentaFormato:    boolean;
    nombredelFormato:     string;
    identificadorFormato: string;
    archivos:             string;
    descargaFormatos:     null;
    ligaDescarga:         string;
    llenarLinea:          null;
    ligaLlenar:           null;
    enviarFormatos:       null;
    ligaEnvioFormatos:    string;
    ligaDOF:              string;
    fechaPublicadoDOF:    null;
    tramiteId:            number;
    activo:               boolean;
}

export interface MasterUnidadesAdministrativa {
    uniId:                   number;
    uniIdDependencia:        number;
    uniNombre:               string;
    uniSiglas:               null | string;
    uniActivo:               boolean;
    uniEtiqueta:             null | string;
    uniEtiqueta2:            null;
    uniRFTS:                 null;
    uniFecha_Creacion:       string;
    uniFecha_Modificacion:   string;
    codigo:                  null;
    padreId:                 number | null;
    tipoVialidad_CatId:      number | null;
    nombreVialidad:          null | string;
    numeroExterior:          null | string;
    numeroInterior:          null | string;
    tipoAsentamiento_CatId:  number | null;
    nombreAsentamiento:      null | string;
    claveLocalidad_CatId:    number | null;
    nombreLocalida:          null | string;
    municipioId:             number | null;
    cp:                      null | string;
    numeroTelefonoOficial:   null | string;
    extension:               null | string;
    correoElectonicoOficial: null;
    notas:                   null | string;
    latitude:                null;
    longitude:               null;
    entidadId:               number | null;
    master_dependencias?:    MasterDependencia | null;
    municipios:              null;
    horarioAtencion:         HorarioAtencion[] | null;
    direccionCompleta:       string;
    publicaciones:           boolean;
}

export interface MasterDependencia {
    depId:                           number;
    depNombre:                       string;
    depSiglas:                       null | string;
    depActivo:                       boolean;
    naturaleza:                      null | string;
    dependencia_Id_Padre:            number | null;
    depFecha_Creado:                 string;
    depFecha_Modificado:             string;
    depIdGobierno:                   number;
    depIdSector_Cat:                 number | null;
    tipo:                            number | null;
    rfts:                            boolean | null;
    pmr:                             boolean | null;
    paisId:                          null;
    entidadId:                       null;
    municipioId:                     null;
    esAMR:                           null;
    dependenciaAMR_Id:               null;
    amrAlternaId:                    null;
    codigo:                          null;
    tipoSujeto_CatId:                number | null;
    renavid:                         null;
    paises:                          null;
    entidades:                       null;
    municipios:                      null;
    oicTieneDependencias:            null;
    master_unidades_administrativas: MasterUnidadesAdministrativa[] | null;
    amrs:                            null;
    renarSujetoObligadoAsociado:     null;
    oic_AtiendeDependencia:          null;
    tipoSujetoDescripcion_CatId:     null;
}

export interface HorarioAtencion {
    id:                number;
    unidadOficinaId:   number;
    diaId:             number;
    apertura:          string;
    cierre:            string;
    activo:            boolean;
    fechaCreacion:     string;
    fechaModificacion: string;
    master_catalogos:  TraNivelGobierno;
    dia:               string;
}

export interface TraNivelGobierno {
    catId:                 number;
    catNombre:             string;
    catValor:              string;
    catCatalogo:           CatCatalogo | null;
    catCatalogo_IdPadre:   null;
    catFecha_Creacion:     string;
    catFecha_Modificacion: string;
    catConfig:             boolean;
    catGeneral:            boolean;
    catActivo:             boolean;
    dependencias:          null;
    orden:                 number | null;
    bajaFJ:                boolean;
    catFechaPublicacion:   null;
    catFechaEntrada:       null;
    horarioAtencion:       any[] | null;
    contenidos:            null;
}

export enum CatCatalogo {
    DiasDeLaSemana = "DiasDeLaSemana",
}

export interface TraCanalesAtencion {
    canalId:                       number;
    canalTramiteId:                number;
    canalAtencion_CatId:           number;
    canalActivo:                   boolean;
    canalEnlace:                   null;
    acciones:                      null;
    accionesPresencial:            null | string;
    permiteAgendarCita:            boolean | null;
    agendarCitaEnLinea:            boolean | null;
    ligaCitaEnLinea:               string;
    existeAppTramite:              boolean | null;
    ligaDescargarApp:              string;
    accionesApp:                   null | string;
    existeWebTramite:              boolean | null;
    accionesWeb:                   null | string;
    ligaWeb:                       string;
    completamenteLinea:            boolean | null;
    cargarDocumentos:              boolean | null;
    darSeguimientoLinea:           boolean | null;
    enviarRecibirInfo:             boolean | null;
    resolucionInternet:            boolean | null;
    firmaElectronica:              boolean | null;
    notificacionesLinea:           boolean | null;
    notificacionesPlazoPrevencion: boolean | null;
    notificacionesPlazoRespuesta:  boolean | null;
    resolucionInmediata:           boolean | null;
    viaTelefonica:                 boolean | null;
    telefono:                      string;
    accionesTelefono:              null | string;
    viaSMS:                        boolean | null;
    codigoSMS:                     string;
    accionesSMS:                   null | string;
    viaKiosko:                     boolean | null;
    accionesKiosko:                null | string;
    otro:                          boolean | null;
    especifiqueOtro:               string;
    accionesOtro:                  null | string;
}

export interface TraDocumentosRequisito {
    docsId:                            number;
    docsDocumento:                     string;
    docsHomoclave:                     null;
    docsTipoInstitucion_CatId:         null;
    docsTipoDocumento_CatId:           number | null;
    docsFechaFormatoPublicacion:       null;
    docsArchivo:                       null;
    docsDescripcionDoc:                string;
    docsCopia:                         boolean;
    docsNumeroCopias:                  number;
    docsOriginal:                      boolean;
    docsNumeroOriginales:              null;
    docsDatoUtilizado:                 null;
    docsRecibeElectronicamente:        null;
    docsAccesoElectronico_CatId:       null;
    docsRequiereAlmacenar:             null;
    docsProteccionDatos:               null;
    docsProcesosInternos:              string;
    docsFecha:                         null;
    docsActivo:                        boolean;
    docsTramiteId:                     number;
    docsUrl:                           null;
    requisitoParteFormato:             boolean;
    naturalezaDelRequisito:            string;
    copiaCertificadas:                 boolean;
    esNecesarioFirma:                  boolean;
    tipoRevisionTercero_CatId:         null;
    otroTipoRevisionTercero:           string;
    empresaEmiteRevision_CatId:        null;
    otraEmpresaEmiteRevision:          string;
    requisitoEsTramite:                boolean;
    institucionEmite:                  null;
    nombreTramiteRequisito:            null;
    tiempoDias:                        number | null;
    tiempoHoras:                       number | null;
    tiempoMinutos:                     null;
    docsNaturalezaRequisitoCatId:      null;
    docsTiempoPromedio:                null;
    ordenNivelID:                      null;
    ordenCatIDNivel:                   null;
    municipioId:                       null;
    requisitoTramites:                 any[];
    docTipoInstitucionDescripcion:     string;
    docTipoDocumentosDescripcion:      string;
    tipoRevisionTerceroDescripcion:    string;
    empresaEmiteRevisionDescripcion:   string;
    doscAccesoElectronicoDescripcion:  string;
    naturalezaDelRequisitoDescripcion: string;
    funAmbitoOrdenamientoDescripcion:  null;
    nivelGobiertoDescripcion:          null;
}

export interface TraMonto {
    montoId:                       number;
    montoNombre:                   null;
    montoClaveContable:            null;
    montoFijo:                     boolean;
    montoMoneda_CatId:             number;
    montoPesos:                    string;
    montoMetodo:                   string;
    montoPagoUsoInterno:           null;
    montoTipoContribuyente_CatId:  null;
    montoSePuedePagarMasUno:       null;
    montoPeriodicidad_CatId:       null;
    montoPeriodosFuturos:          null;
    montoPagoVentanilla:           null;
    montoAplicaIva:                null;
    montoAplicaSaldoFavor:         null;
    montoAplicaParteActualizada:   null;
    montoAplicaRecargos:           null;
    montoAplicaMultaCorreccion:    null;
    montoVigenciaLineaCaptura:     null;
    montoNumeroDiasVigencia:       null;
    montoMomentoRealizaPago_CatId: number;
    montoTramiteId:                number;
    montoActivo:                   boolean;
    montoFecha:                    null;
    montoOficinas:                 null;
    montoOficinasEspecifique:      string;
    montoBanco:                    boolean;
    montoBancoReferencias:         string;
    montoEnLinea:                  null;
    montoEnLineaReferencias:       string;
    montoTiendas:                  null;
    montoTiendasReferncias:        string;
    montosOtros:                   null;
    montosOtrosEspecifique:        string;
    montoOtroDesc:                 string;
    rangoMontoInicial:             string;
    rangoMontoFinal:               string;
    montoMonedaDescripcion:        string;
    monedaTipoContribuyente:       null;
    montoMomentoRealizaPago:       string;
}

export interface TraPlazo {
    plazoId:                number;
    plazoTramiteId:         number;
    plazoUnidad_CatId:      number;
    plazoUnidad:            number;
    plazoObservaciones:     null;
    plazoMaximo:            boolean | null;
    plazoPrevencion:        boolean | null;
    plazoReal:              boolean | null;
    plazoActivo:            boolean;
    plazoFecha:             string;
    plazoUnidadDescripcion: string;
}

export interface TraResolucion {
    resId:                  number;
    resTipo_CatId:          null;
    resVigencia_CatId:      number;
    resVigencia:            string;
    resActivo:              boolean;
    resTramiteId:           number;
    resVigenciaDesc:        string;
    resVigenciaDescripcion: string;
}

export interface TraTramites {
    traId:                          number;
    traUsuarioId:                   number;
    traDependenciaId:               number;
    traUnidadAdminId:               number;
    traStatus_CatId:                number;
    traNombre:                      string;
    traNombreCiudadano:             null;
    traModalidad:                   string;
    traHomoclaveBack:               null;
    traHomoclave:                   string;
    traPadreID:                     number;
    traTipoTamite_CatId:            number;
    traCasosPresenta:               string;
    traDescripcionCiudadana:        string;
    traEfectosEliminacion:          null;
    traNivelDigitalizacion_CatId:   null;
    traVolumenAnual:                number;
    traResolucionesFavorables:      number;
    traPeriodoPresentacion:         null;
    traGratuito:                    boolean;
    traConsultasFrecuentes:         null;
    traQuejasFrecuentes:            null;
    traVolumenMolestias:            null;
    traComentariosRespecto:         string;
    traNotasAdicionales:            null;
    traMasInfo:                     null;
    traPersona:                     string;
    traCadenas:                     null;
    traPasosFueraDependencia:       null;
    traRazonesSaleDependencia:      null;
    traExcepciones:                 null;
    traVigencia_CatId:              null;
    traVolumenConAnuales:           null;
    traFicta_CatId:                 number;
    traFecha:                       string;
    traFechaModificacion:           string;
    traVigenciaUnidad:              null;
    traMovimiento:                  string;
    tradocsObservacion:             null;
    traJustificacionEliminacion:    string;
    traTipoTramite_Otro:            string;
    traquienSolicita_Otro:          string;
    traIdHomoclave:                 null;
    consecutivo:                    number;
    year:                           number;
    otroHVitales:                   string;
    otroCategoria:                  string;
    otroProceso:                    null;
    tramiteServicio:                string;
    beneficio:                      string;
    traConsultasChatLinea:          boolean;
    traConsultasChatLineaLigas:     string;
    traNumeroFormatos:              null;
    numeroRequFormato:              number;
    numeroRequNoFormato:            number;
    requiereConservarInfo:          boolean;
    acreditacion:                   null;
    acreditacionEspecifique:        string;
    verificacion:                   null;
    verificacionEspecifique:        string;
    inspeccion:                     null;
    inspeccionEspecifique:          string;
    conservarOtros:                 null;
    conservarOtrosEspecifique:      string;
    suficienteCumplirRequisitos:    boolean;
    metodologiaResolucion:          string;
    metodologiaAdjuntarArchivo:     string;
    tramiteRequiereInspeccion:      boolean;
    objetivoInspeccion:             string;
    resolucionVinculadaTramite:     boolean;
    resolucionRequisitoTramite:     boolean;
    homoclavesRelacionados:         null;
    obstaculoEnfrentado:            string;
    sugerenciaMejorarTramite:       string;
    tiempoPromedioInteresados:      null;
    tiempoPromedioInteresadosValor: null;
    actividadEconomica:             boolean;
    idTarea:                        null;
    pdf:                            null;
    catNivelGobID:                  null;
    entidadId:                      null;
    municipioId:                    null;
    tramitePdf:                     null;
    tra_comentarios:                any[];
    master_catalogos:               null;
    requisito_Tramite:              any[];
    entidades:                      null;
    municipios:                     null;
    inspeccion_Tramite:             any[];
    tra_TramitesAsociados:          any[];
    tramite_SectorEconomico:        any[];
    tramite_UnidadesAsociadas:      TramiteUnidadesAsociada[];
    canalAtencionAcciones:          CanalAtencionAccione[];
    tramite_UsuariosTramite:        TramiteUsuariosTramite[];
    entidad:                        null;
    municipio:                      null;
}

export interface CanalAtencionAccione {
    id:                number;
    canalId:           number;
    tramiteId:         number;
    accion:            string;
    orden:             number;
    tipo:              Tipo;
    activo:            boolean;
    fechaCreacion:     string;
    fechaModificacion: string;
}

export interface TramiteUnidadesAsociada {
    id:                              number;
    tramiteId:                       number;
    unidadId:                        number;
    tipo:                            string;
    activo:                          boolean;
    fechaCreacion:                   string;
    fechaModificacion:               string;
    master_unidades_administrativas: MasterUnidadesAdministrativa;
}

export interface TramiteUsuariosTramite {
    id:                 number;
    tramiteId:          number;
    usuarioId:          number;
    rolId:              number;
    descripcionOtroRol: null;
    activo:             boolean;
    fechaCreacion:      string;
    fechaModificacion:  string;
    master_usuarios:    null;
}

export interface TraQuienSolicita {
    quienId:                  number;
    quienSolicita_CatId:      number;
    quienTramiteId:           number;
    quienActivo:              boolean;
    quienFecha:               string;
    quienSolicitaDescripcion: string;
}

export interface TramiteFundamento {
    id:                            number;
    traId:                         number;
    activo:                        boolean;
    fecha:                         string;
    fechaModificacion:             string;
    tipo:                          string;
    articulo:                      null | string;
    fraccion:                      Fraccion | null;
    inciso:                        null | string;
    parrafo:                       Parrafo | null;
    numero:                        null | string;
    letra:                         null | string;
    otro:                          Otro | null;
    renarId:                       number;
    ambitoOrdenamientoId:          number | null;
    tipoOrdenamientoId:            number | null;
    requisitoId:                   number | null;
    canalAtencionId:               number | null;
    formatoId:                     null;
    plazoPrevencionId:             number | null;
    plazoInterezadoId:             number | null;
    plazoMaximoId:                 number | null;
    renar:                         Renar;
    tipoOrdenamientoDescripcion:   TipoOrdenamientoDescripcion;
    ambitoOrdenamientoDescripcion: AmbitoOrdenamientoDescripcion;
    nombreFundamento:              string;
    hipervinculo:                  string;
    fechaExpedicion:               string;
    urlReg:                        null | string;
}

export enum AmbitoOrdenamientoDescripcion {
    Federal = "Federal",
}

export enum Fraccion {
    Empty = "",
    Vii = "VII",
    Viii = "VIII",
}

export enum Otro {
    Anexo19 = "Anexo 19",
    Empty = "",
    ReglaPrimeraYDécimaQuinta = "Regla Primera y Décima Quinta\t",
}

export enum Parrafo {
    Empty = "",
    Segundo = "segundo",
}

export interface Renar {
    id:                             number;
    nombre:                         string;
    fechaExpedicion:                string;
    fechaPublicacion:               null | string;
    fechaActualizacion:             null | string;
    tienVigencia:                   boolean | null;
    vigencia_CatId:                 null;
    unidadVigencia:                 null | string;
    aplicaTodosSujetosObligados:    null;
    ambito_CatId:                   number;
    fechaActualizacionRegulacion:   null;
    tipoOrdenamiento_CatId:         number;
    indiceRegulacion:               null | string;
    objetivoRegulacion:             null | string;
    usuarioId:                      null;
    tipoSujetoObligado_CatId:       null;
    anexoRegulacion:                null | string;
    nota:                           null | string;
    preregistro:                    null;
    fechaPreregistro:               null;
    activo:                         boolean;
    fechaCreacion:                  null | string;
    fechaModificacion:              null;
    aplicaTodosMaterias:            null;
    homoclave:                      null | string;
    sujetoObligadoID:               number;
    url:                            null | string;
    documentoPdf:                   null | string;
    existenMaterias:                boolean | null;
    cumplirRegulacion:              boolean | null;
    publico:                        null;
    fechaPublico:                   null;
    usuarioIdPublico:               null;
    sujetoObligadoIdPublico:        null;
    catCatalogoId:                  number;
    fechaRecepcion:                 null;
    actividadEconomica:             boolean | null;
    idTarea:                        null;
    unidadAdministrativaId:         null;
    justificacionEliminacion:       null;
    movimiento:                     null;
    padreID:                        null;
    documentoPdfExtension:          null;
    renar_SectorEconomico:          null;
    renarSujetoObligadoAsociado:    null;
    renarRegulacionAsociada:        null;
    renarInspeccionAsociada:        null;
    renarMaterias:                  null;
    renar_Indices:                  null;
    ambitoDescripcionCat:           null;
    vigenciaDescripcionCat:         null;
    tipoOrdenamientoDescripcionCat: null;
    renarTramiteAsociada:           null;
    totalesEncuesta:                null;
    entidad:                        null;
    municipio:                      null;
    estatus:                        null;
    renarRegulacionAsociadaMas:     boolean;
    tareaCancelada:                 null;
    solicitudCancelarTarea:         null;
    vigencia:                       null;
}

export enum TipoOrdenamientoDescripcion {
    Acuerdo = "Acuerdo",
    Constitución = "Constitución",
    Ley = "Ley",
    Resolución = "Resolución",
}

export interface UsuarioTramite {
    id:                      number;
    nombre:                  string;
    apPaterno:               string;
    apMaterno:               string;
    telefono:                string;
    extension:               null | string;
    cargo:                   string;
    correo:                  string;
    rolId:                   number;
    descripcionOtroRol:      null;
    descripcionRol:          string;
    tipo:                    string;
    datosOficinaResponsable: string;
    uniId:                   number | null;
}
