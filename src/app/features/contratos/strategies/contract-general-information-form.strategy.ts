import { inject, Injectable } from '@angular/core';
import { FormStrategy } from '../../../core/strategies/form-strategy.interface';
import { Contract } from '../interfaces/contract.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';
import { Operator } from '../../operadoras/interfaces/operator.interface';
import { OperatorFacade } from '../../operadoras/helpers/operator.facade';
import { ContractType } from '../interfaces/contract-type.interface';
import { ContractFacade } from '../helpers/contract.facade';

@Injectable({
  providedIn: 'root',
})
export class ContractGeneralInformationFormStrategy
  implements FormStrategy<Contract>
{
  private formBuilder = inject(FormBuilder);
  operatorOptions: Operator[] = [];
  contractTypeOptions: ContractType[] = [];
  operatorFacade = inject(OperatorFacade);
  contracFacade = inject(ContractFacade);

  constructor() {
    this.loadData();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      codigoOperadora: ['', [Validators.required('La operadora es requerida')]],
      numero: ['', [Validators.required('El numero de contrato es requerido')]],
      codigoTipoContrato: [
        '',
        [Validators.required('El tipo de contrato es requerido')],
      ],
    });
  }

  patchFormValues(form: FormGroup, entity: Contract): void {
    form.patchValue({
      codigoOperadora: entity.operadora.codigo,
      numero: entity.numero,
      codigoTipoContrato: entity.tipoContrato.codigo,
    });
  }

  prepareEntityData(form: FormGroup) {
    return form.value;
  }

  loadData() {
    this.operatorFacade.getAllEntities().subscribe((response) => {
      this.operatorOptions = response;
    });
    this.contracFacade.getContractTypes().subscribe((response) => {
      this.contractTypeOptions = response;
    });
  }
}
