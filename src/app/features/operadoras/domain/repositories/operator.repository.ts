import { Observable } from 'rxjs';
import {
  CreateOperatorModel,
  OperatorModel,
  UpdateOperatorModel,
} from '../models/operator.model';
import { CreateResponsibleModel, UpdateResponsibleModel } from '../models/responsible.model';

export abstract class OperatorRepository {
  abstract getAll(): Observable<OperatorModel[]>;

  abstract getByID(id: string): Observable<OperatorModel | undefined>;

  abstract createWithResponsible(
    operator: CreateOperatorModel,
    responsible: CreateResponsibleModel,
  ): Observable<OperatorModel>;

  abstract updateWithResponsible(
    id: string,
    operator: UpdateOperatorModel,
    responsible: UpdateResponsibleModel,
  ): Observable<OperatorModel | undefined>;

  abstract update(
    id: string,
    operator: UpdateOperatorModel,
  ): Observable<OperatorModel | undefined>;

  abstract delete(id: string): Observable<OperatorModel | undefined>;
}
