import { Operator } from '../../operadoras/interfaces/operator.interface';
import { ContractType } from './contract-type.interface';
import { CreateSector, Sector, UpdateSector } from './sector.interface';

export interface ContractBase {
  numero: string;
  fechaFirma: string | Date;
  cantidad: number;
  fechaInicio: string;
  fechaFin: string;
  valorTotal: number;
  observacion?: string;
}

export interface Contract extends ContractBase {
  codigo: string;
  tipoContrato: ContractType;
  sector: Sector;
  operadora: Operator;
}

export interface CreateContract extends ContractBase {
  sector: CreateSector;
  idOperadora: string;
}

export interface UpdateContract extends Partial<ContractBase> {
  sector?: UpdateSector;
}
