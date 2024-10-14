import { map, Observable, of } from 'rxjs';
import {
  OperatorModel,
  CreateOperatorModel,
  UpdateOperatorModel,
} from '../../domain/models/operator.model';
import {
  CreateResponsibleModel,
  UpdateResponsibleModel,
} from '../../domain/models/responsible.model';
import { OperatorRepository } from '../../domain/repositories/operator.repository';
import { OperatorMapperImpl } from '../mappers/operator.mapper';
import { environment } from '../../../../environments/environment';
import { OperatorEntity } from '../entities/operator.entity';
import { operadorasData } from '../operadoras.data';

export class OperatorRepositoryImpl extends OperatorRepository {
  private readonly STORAGE_KEY = 'operadoras';
  url: string;
  operatorMapper = new OperatorMapperImpl();
  responsibleMapper = new OperatorMapperImpl();

  constructor() {
    super();
    this.url = `${environment.urlApi}/operadoras`;
    this.initializeStorage();
  }

  private initializeStorage(): void {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(operadorasData));
    }
  }

  private getStorageData(): OperatorEntity[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private setStorageData(data: OperatorEntity[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  override getAll(): Observable<OperatorModel[]> {
    const operators = this.getStorageData();
    return of(operators).pipe(
      map((operators) =>
        operators.map((operator) => this.operatorMapper.mapFrom(operator))
      )
    );
  }

  override getByID(id: string): Observable<OperatorModel | undefined> {
    const operators = this.getStorageData();
    const operator = operators.find((o) => o.codigo === id);
    return of(operator ? this.operatorMapper.mapFrom(operator) : undefined);
  }

  override createWithResponsible(
    operator: CreateOperatorModel,
    responsible: CreateResponsibleModel
  ): Observable<OperatorModel> {
    const operators = this.getStorageData();
    const id =
      operators.length > 0 ? operators[operators.length - 1].codigo + 1 : 1;
    const newOperator: OperatorEntity = this.operatorMapper.mapTo({
      ...operator,
      id: id.toString(),
      responsible: {
        ...responsible,
        id: id.toString(),
        idOperator: id.toString(),
      },
    });
    operators.push(newOperator);
    this.setStorageData(operators);
    return of(this.operatorMapper.mapFrom(newOperator));
  }

  override updateWithResponsible(
    id: string,
    operator: UpdateOperatorModel,
    responsible: UpdateResponsibleModel
  ): Observable<OperatorModel | undefined> {
    const operators = this.getStorageData();
    const index = operators.findIndex((o) => o.codigo === id);
    if (index !== -1) {
      const updatedOperator: OperatorEntity = {
        ...operators[index],
        ...operator,
        responsable: {
          ...operators[index].responsable,
          ...responsible,
        },
      };
      operators[index] = updatedOperator;
      this.setStorageData(operators);
      return of(this.operatorMapper.mapFrom(updatedOperator));
    }
    return of(undefined);
  }

  override update(
    id: string,
    operator: UpdateOperatorModel
  ): Observable<OperatorModel | undefined> {
    const operators = this.getStorageData();
    const index = operators.findIndex((o) => o.codigo === id);
    if (index !== -1) {
      const updatedOperator: OperatorEntity = {
        ...operators[index],
        ...operator,
      };
      operators[index] = updatedOperator;
      this.setStorageData(operators);
      return of(this.operatorMapper.mapFrom(updatedOperator));
    }
    return of(undefined);
  }

  override delete(id: string): Observable<OperatorModel | undefined> {
    const operators = this.getStorageData();
    const index = operators.findIndex((o) => o.codigo === id);
    if (index !== -1) {
      const deletedOperator = operators.splice(index, 1)[0];
      this.setStorageData(operators);
      return of(this.operatorMapper.mapFrom(deletedOperator));
    }
    return of(undefined);
  }
}
