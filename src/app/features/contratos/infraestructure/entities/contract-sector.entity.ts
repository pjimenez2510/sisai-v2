export interface ProvinceEntity {
  codigo: string;
  nombre: string;
  descripcion: string;
}

export interface CantonEntity {
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

export interface SectorEntity {
  codigo: string;
  sector: string;
  address: string;
  povince: ProvinceEntity;
  canton: CantonEntity;
  parroquia: Parroquia;
}

export interface CreateSectorEntity
  extends Omit<SectorEntity, 'codigo' | 'province' | 'canton' | 'parroquia'> {
  codigoProvincia: string;
  codigoCanton: string;
  codigoParroquia: string;
}

export interface UpdateSectorEntity
  extends Partial<
    Omit<SectorEntity, 'codigo' | 'province' | 'canton' | 'parroquia'>
  > {
  codigoProvincia: string;
  codigoCanton: string;
  codigoParroquia: string;
}
