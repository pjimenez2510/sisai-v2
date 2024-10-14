import { ResponsibleEntity } from './responsible.entity';

export interface OperatorEntity {
  codigo: string;
  nombre: string;
  ruc: string;
  telefono1: string;
  telefono2?: string;
  direccion: string;
  observacion?: string;
  responsable: ResponsibleEntity;
}
