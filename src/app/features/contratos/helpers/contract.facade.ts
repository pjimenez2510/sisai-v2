import { inject, Injectable } from '@angular/core';
import { IFacade } from '../../../core/interfaces/facade.interface';
import {
  Contract,
  CreateContract,
  UpdateContract,
} from '../interfaces/contract.interface';
import { Observable, tap } from 'rxjs';
import { ContractService } from '../services/contract.service';
import { MessageWrapedService } from '../../../shared/services/message-wraped.service';
import { Router } from '@angular/router';
import { ContractType } from '../interfaces/contract-type.interface';

@Injectable({
  providedIn: 'root',
})
export class ContractFacade
  implements IFacade<Contract, CreateContract, UpdateContract>
{
  contractService = inject(ContractService);
  messageService = inject(MessageWrapedService);
  router = inject(Router);

  getEntity(id: number): Observable<Contract> {
    return this.contractService.getById(id);
  }

  getAllEntities(): Observable<Contract[]> {
    return this.contractService.getAll();
  }

  createEntity(params: CreateContract): Observable<Contract> {
    this.router.navigate(['/main/contratos/lista']);
    return this.contractService.create(params).pipe(
      tap(() => {
        this.messageService.showSuccessMessage('Contrato creado exitosamente');
        this.router.navigate(['/main/contratos/lista']);
      })
    );
  }

  updateEntity(id: number, params: UpdateContract): Observable<Contract> {
    return this.contractService.update(id, params).pipe(
      tap(() => {
        this.messageService.showSuccessMessage(
          'Contrato actualizado exitosamente'
        );
      })
    );
  }

  deleteEntity(id: number): Observable<boolean> {
    return this.contractService.delete(id);
  }

  getContractTypes(): Observable<ContractType[]> {
    return this.contractService.getContractTypes();
  }
}
