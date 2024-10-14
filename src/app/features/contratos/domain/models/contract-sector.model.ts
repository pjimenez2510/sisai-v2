export interface ProvinceModel {
  id: string;
  name: string;
  description: string;
}

export interface CantonModel {
  id: string;
  name: string;
  description: string;
  idProvince: string;
}

export interface Parroquia {
  id: string;
  name: string;
  description: string;
  idCanton: string;
}

export interface SectorModel {
  id: string;
  sector: string;
  address: string;
  povince: ProvinceModel;
  canton: CantonModel;
  parroquia: Parroquia;
}

export interface CreateSectorModel
  extends Omit<SectorModel, 'id' | 'province' | 'canton' | 'parroquia'> {
  idProvince: string;
  idCanton: string;
  idParroquia: string;
}

export interface UpdateSectorModel
  extends Partial<
    Omit<SectorModel, 'id' | 'province' | 'canton' | 'parroquia'>
  > {
  idProvince: string;
  idCanton: string;
  idParroquia: string;
}
