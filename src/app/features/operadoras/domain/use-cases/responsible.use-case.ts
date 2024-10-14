import { Injectable } from '@angular/core';
import { ResponsibleRepository } from '../repositories/responsible.respository';
import { Observable } from 'rxjs';
import {
  CreateResponsibleModel,
  ResponsibleModel,
  UpdateResponsibleModel,
} from '../models/responsible.model';

@Injectable({
  providedIn: 'root',
})
export class ResponsibleUseCases {
  constructor(private responsibleRepository: ResponsibleRepository) {}

  getAll(): Observable<ResponsibleModel[]> {
    return this.responsibleRepository.getAll();
  }

  getById(id: string): Observable<ResponsibleModel | undefined> {
    return this.responsibleRepository.getById(id);
  }

  update(
    id: string,
    responsible: UpdateResponsibleModel
  ): Observable<ResponsibleModel | undefined> {
    return this.responsibleRepository.update(id, responsible);
  }

  delete(id: string): Observable<ResponsibleModel | undefined> {
    return this.responsibleRepository.delete(id);
  }
}
