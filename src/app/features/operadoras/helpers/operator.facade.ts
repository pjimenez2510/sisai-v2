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
    throw new Error('Method not implemented.');
  }
  getAllEntities(): Observable<Operator[]> {
    return of(operadorasData);
  }
  createEntity(params: CreateOperator): Observable<Operator> {
    throw new Error('Method not implemented.');
    return this.operatorService.create(params).pipe(
      tap((response) => {
        this.messageService.showSuccessMessage('Operador creado exitosamente');
        this.router.navigate(['/main/operadoras/lista']);
      }),
      tap((response) => {
        this.messageService.handleError(response, 'Error al crear operador');
      })
    );
  }
  updateEntity(id: number, params: UpdateOperator): Observable<Operator> {
    throw new Error('Method not implemented.');
    return this.operatorService.update(id, params).pipe(
      tap((response) => {
        this.messageService.showSuccessMessage(
          'Operador actualizado exitosamente'
        );
        this.router.navigate(['/main/operadoras/lista']);
      }),
      tap((response) => {
        this.messageService.handleError(
          response,
          'Error al actualizar operador'
        );
      })
    );
  }
  deleteEntity(id: number): Observable<boolean> {
    throw new Error('Method not implemented.');
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
