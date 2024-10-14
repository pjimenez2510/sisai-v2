import { ResponsibleModel } from './responsible.model';

export interface OperatorModel {
  id: string;
  name: string;
  ruc: string;
  phone1: string;
  phone2?: string;
  address: string;
  observation?: string;
  responsible: ResponsibleModel;
}

export interface CreateOperatorModel
  extends Omit<OperatorModel, 'id' | 'responsible'> {}

export interface UpdateOperatorModel
  extends Omit<OperatorModel, 'id' | 'responsible'> {}
