import { Injectable } from '@angular/core';
import { OperatorRepository } from '../repositories/operator.repository';
import { Observable } from 'rxjs';
import {
  CreateOperatorModel,
  OperatorModel,
  UpdateOperatorModel,
} from '../models/operator.model';
import {
  CreateResponsibleModel,
  UpdateResponsibleModel,
} from '../models/responsible.model';
@Injectable({ providedIn: 'root' })
export class OperatorUseCases {
  constructor(private operatorRepository: OperatorRepository) {}

  getAll(): Observable<OperatorModel[]> {
    return this.operatorRepository.getAll();
  }

  getByID(id: string): Observable<OperatorModel | undefined> {
    return this.operatorRepository.getByID(id);
  }

  createWithResponsible(
    operator: CreateOperatorModel,
    responsible: CreateResponsibleModel
  ): Observable<OperatorModel> {
    return this.operatorRepository.createWithResponsible(operator, responsible);
  }

  updateWithResponsible(
    id: string,
    operator: UpdateOperatorModel,
    responsible: UpdateResponsibleModel
  ): Observable<OperatorModel | undefined> {
    return this.operatorRepository.updateWithResponsible(
      id,
      operator,
      responsible
    );
  }

  update(
    id: string,
    operator: UpdateOperatorModel
  ): Observable<OperatorModel | undefined> {
    return this.operatorRepository.update(id, operator);
  }

  delete(id: string): Observable<OperatorModel | undefined> {
    return this.operatorRepository.delete(id);
  }
}
