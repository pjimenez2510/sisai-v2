import { Observable } from 'rxjs';
import {
  CreateResponsibleModel,
  ResponsibleModel,
  UpdateResponsibleModel,
} from '../models/responsible.model';

export abstract class ResponsibleRepository {
  abstract getAll(): Observable<ResponsibleModel[]>;

  abstract getById(id: string): Observable<ResponsibleModel | undefined>;

  abstract update(
    id: string,
    responsible: UpdateResponsibleModel,
  ): Observable<ResponsibleModel | undefined>;

  abstract delete(id: string): Observable<ResponsibleModel | undefined>;
}
