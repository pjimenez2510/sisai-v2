export interface Provincia {
  codigo: string;
  nombre: string;
  descripcion: string;
}

export interface Canton {
  codigo: string;
  nombre: string;
  descripcion: string;
  codigoProvincia: string;
}

export interface Parroquia {
  codigo: string;
  nombre: string;
  descripcion: string;
  codigoCanton: string;
}

export interface SectorBase {
  sectores: string;
  direcciones: string;
}

export interface Sector extends SectorBase {
  codigo: string;
  provincia: Provincia;
  canton: Canton;
  parroquia: Parroquia;
}

export interface CreateSector extends SectorBase {
  codigoProvincia: string;
  codigoCanton: string;
  codigoParroquia: string;
}

export interface UpdateSector extends Partial<SectorBase> {
  codigoProvincia?: string;
  codigoCanton?: string;
  codigoParroquia?: string;
}
