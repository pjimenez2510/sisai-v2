import { Operator } from '../../operadoras/interfaces/operator.interface';
import { ContractType } from './contract-type.model';
import { CreateSector, Sector, UpdateSector } from './sector';

export interface ContractBase {
  fechaFirma: string | Date;
  cantidad: number;
  fechaInicio: number;
  fechaFin: number;
  valorTotal: number;
  observacion: number;
}

export interface Contract extends ContractBase {
  codigo: string;
  tipoContrato: ContractType;
  sector: Sector;
  operadora: Operator;
}

export interface CreateContract extends ContractBase {
  sector: CreateSector;
}

export interface UpdateContract extends Partial<ContractBase> {
  sector?: UpdateSector;
}
