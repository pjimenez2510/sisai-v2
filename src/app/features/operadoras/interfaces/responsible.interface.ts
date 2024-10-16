export interface ResponsibleBase {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
}

export interface Responsible extends ResponsibleBase {
  codigo: string;
}

export type CreateResponsible = ResponsibleBase;

export type UpdateResponsible = Partial<ResponsibleBase>;

export type ResponseResponsible = Responsible;

export type ResponseListResponsible = Responsible[];
