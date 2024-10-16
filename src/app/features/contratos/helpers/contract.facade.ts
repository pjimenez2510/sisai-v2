import { inject, Injectable } from '@angular/core';
import { IFacade } from '../../../core/interfaces/facade.interface';
import {
  Contract,
  CreateContract,
  UpdateContract,
} from '../interfaces/contract.model';
import { Observable } from 'rxjs';
import { ContractService } from '../services/contract.service';
import { MessageWrapedService } from '../../../shared/services/message-wraped.service';

@Injectable({
  providedIn: 'root',
})
export class ContractFacade
  implements IFacade<Contract, CreateContract, UpdateContract>
{
  contractService = inject(ContractService);
  messageService = inject(MessageWrapedService);

  getEntity(id: number): Observable<Contract> {
    throw new Error('Method not implemented.');
  }
  getAllEntities(): Observable<Contract[]> {
    throw new Error('Method not implemented.');
  }
  createEntity(params: CreateContract): Observable<Contract> {
    throw new Error('Method not implemented.');
  }
  updateEntity(id: number, params: UpdateContract): Observable<Contract> {
    throw new Error('Method not implemented.');
  }
  deleteEntity(id: number): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
