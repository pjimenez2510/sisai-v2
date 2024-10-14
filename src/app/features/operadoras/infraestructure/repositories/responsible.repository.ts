import { Injectable } from '@angular/core';
import { ResponsibleRepository } from '../../domain/repositories/responsible.respository';
import { map, Observable, of } from 'rxjs';
import {
  ResponsibleModel,
  UpdateResponsibleModel,
} from '../../domain/models/responsible.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ResponsibleMapperImpl } from '../mappers/responsible.mapper';
import { OperatorEntity } from '../entities/operator.entity';

@Injectable({
  providedIn: 'root',
})
export class ResponsibleRepositoryImpl extends ResponsibleRepository {
  private readonly STORAGE_KEY = 'operadoras';
  url: string;
  responsibleMapper = new ResponsibleMapperImpl();

  constructor(private http: HttpClient) {
    super();
    this.url = `${environment.urlApi}/operadoras`;
    this.initializeStorage();
  }

  private initializeStorage(): void {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
    }
  }

  private getStorageData(): OperatorEntity[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private setStorageData(data: OperatorEntity[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  override getAll(): Observable<ResponsibleModel[]> {
    const operators = this.getStorageData();
    return of(operators).pipe(
      map((operators) =>
        operators.map((operator) =>
          this.responsibleMapper.mapFrom(operator.responsable)
        )
      )
    );
  }

  override getById(id: string): Observable<ResponsibleModel | undefined> {
    const operators = this.getStorageData();
    const operator = operators.find((o) => o.responsable.codigo === id);
    return of(
      operator?.responsable
        ? this.responsibleMapper.mapFrom(operator.responsable)
        : undefined
    );
  }

  override update(
    id: string,
    responsible: UpdateResponsibleModel
  ): Observable<ResponsibleModel | undefined> {
    const operators = this.getStorageData();
    const index = operators.findIndex((o) => o.responsable.codigo === id);
    if (index !== -1) {
      const updatedOperator: OperatorEntity = {
        ...operators[index],
        responsable: {
          ...operators[index].responsable,
          ...responsible,
        },
      };
      operators[index] = updatedOperator;
      this.setStorageData(operators);
      return of(this.responsibleMapper.mapFrom(updatedOperator.responsable));
    }
    return of(undefined);
  }

  override delete(id: string): Observable<ResponsibleModel | undefined> {
    const operators = this.getStorageData();
    const index = operators.findIndex((o) => o.responsable.codigo === id);
    if (index !== -1) {
      const deletedOperator = operators.splice(index, 1)[0];
      this.setStorageData(operators);
      return of(this.responsibleMapper.mapFrom(deletedOperator.responsable));
    }
    return of(undefined);
  }
}
