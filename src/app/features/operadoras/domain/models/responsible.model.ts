export interface ResponsibleModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idOperator: string;
}

export interface CreateResponsibleModel
  extends Omit<ResponsibleModel, 'id' | 'idOperator'> {}

export interface UpdateResponsibleModel
  extends Omit<ResponsibleModel, 'id' | 'idOperator'> {}
