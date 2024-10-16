import { inject, Injectable } from '@angular/core';
import { IFacade } from '../../../core/interfaces/facade.interface';
import {
  CreateOperator,
  Operator,
  UpdateOperator,
} from '../interfaces/operator.interface';
import { Observable, of, tap } from 'rxjs';
import { OperatorService } from '../services/operator.service';
import { MessageWrapedService } from '../../../shared/services/message-wraped.service';
import { Router } from '@angular/router';
import { operadorasData } from '../data/operadoras.data';

@Injectable({
  providedIn: 'root',
})
export class OperatorFacade
  implements IFacade<Operator, CreateOperator, UpdateOperator>
{
  private operatorService = inject(OperatorService);
  private messageService = inject(MessageWrapedService);
  private router = inject(Router);

  getEntity(id: number): Observable<Operator> {
    return this.operatorService.getById(id);
  }
  getAllEntities(): Observable<Operator[]> {
    return of(operadorasData);
  }
  createEntity(params: CreateOperator): Observable<Operator> {
    this.router.navigate(['/main/operadoras/lista']);
    return this.operatorService.create(params).pipe(
      tap((response) => {
        console.log(response);
        this.messageService.showSuccessMessage('Operadora creada exitosamente');
        this.router.navigate(['/main/operadoras/lista']);
      })
    );
  }
  updateEntity(id: number, params: UpdateOperator): Observable<Operator> {
    return this.operatorService.update(id, params).pipe(
      tap((response) => {
        this.messageService.showSuccessMessage(
          'Operadora actualizada exitosamente'
        );
        this.router.navigate(['/main/operadoras/lista']);
      }),
      tap((response) => {
        this.messageService.handleError(
          response,
          'Error al actualizar la operadora'
        );
      })
    );
  }
  deleteEntity(id: number): Observable<boolean> {
    return this.operatorService.delete(id).pipe(
      tap((response) => {
        this.messageService.showSuccessMessage(
          'Operador eliminado exitosamente'
        );
        this.router.navigate(['/main/operadoras/lista']);
      }),
      tap((response) => {
        this.messageService.handleError(response, 'Error al eliminar operador');
      })
    );
  }
}
