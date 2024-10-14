import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorRepository } from '../domain/repositories/operator.repository';
import { OperatorUseCases } from '../domain/use-cases/operator.use-case';
import { OperatorRepositoryImpl } from './repositories/operator.respository';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: OperatorRepository, useClass: OperatorRepositoryImpl },
  ],
})
export class OperatorInfraestructureModule {}
