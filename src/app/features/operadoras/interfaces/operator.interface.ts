import {
  CreateResponsible,
  Responsible,
  UpdateResponsible,
} from './responsible.interface';

export interface OperatorBase {
  nombre: string;
  ruc: string;
  telefono1: string;
  telefono2?: string;
  direccion: string;
  observacion?: string;
}

export interface Operator extends OperatorBase {
  codigo: string;
  responsable: Responsible;
}

export interface CreateOperator extends OperatorBase {
  responsable: CreateResponsible;
}

export interface UpdateOperator extends Partial<OperatorBase> {
  responsable: UpdateResponsible;
}

export type ResponseOperator = Operator;

export type ResponseListOperator = Operator[];
