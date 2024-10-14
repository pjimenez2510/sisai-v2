import { ContractTypeModel } from './contract-type.model';
export interface ContractModel {
  id: string;
  signatureDate: string | Date;
  contractType: ContractTypeModel;
  quantity: string;
  quantityVerified: string;
  startDate: string;
  endDate: string;
  totalValue: number;
  totalValueVerified: number;
  verificationStatus: number;
  observation: string;
  idSector: string;
  idOperator: string;
}

export interface CreateContractModel
  extends Omit<
    ContractModel,
    | 'id'
    | 'contractType'
    | 'totalValue'
    | 'totalValueVerified'
    | 'verificationStatus'
  > {
  idContractType: string;
}

export interface UpdateContractModel
  extends Partial<Omit<ContractModel, 'id' | 'contractType'>> {
  idContractType: string;
}
