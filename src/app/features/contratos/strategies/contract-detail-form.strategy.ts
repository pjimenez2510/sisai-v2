import { inject, Injectable } from '@angular/core';
import { FormStrategy } from '../../../core/strategies/form-strategy.interface';
import { Contract } from '../interfaces/contract.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';
import { getMonthsBetweenDates } from '../../../shared/utils/getMonthsBetweenDates';
import { addMonths } from '../../../shared/utils/addMonths';

@Injectable({
  providedIn: 'root',
})
export class ContractDetailFormStrategy implements FormStrategy<Contract> {
  formBuilder = inject(FormBuilder);

  createForm(): FormGroup {
    return this.formBuilder.group({
      cantidad: [
        null,
        [
          Validators.required('La cantidad es requerida'),
          Validators.min(1, 'La cantidad debe ser mayor a 0'),
        ],
      ],
      fechaInicio: [
        null,
        Validators.required('La fecha de inicio es requerida'),
      ],
      numberOfMonths: [
        null,
        Validators.required('El número de meses es requerido'),
      ],
      fechaFirma: [
        null,
        Validators.required('La fecha de firma es requerida'),
      ],
      observacion: [''],
    });
  }
  patchFormValues(form: FormGroup, entity: Contract): void {
    form.patchValue({
      cantidad: entity.cantidad,
      fechaInicio: entity.fechaInicio,
      numberOfMonths: getMonthsBetweenDates(
        entity.fechaInicio,
        entity.fechaFin
      ),
      fechaFirma: entity.fechaFirma,
      observacion: entity.observacion,
    });
  }
  prepareEntityData(form: FormGroup) {
    const formValue = form.value;
    return {
      cantidad: formValue.cantidad,
      fechaInicio: formValue.fechaInicio,
      fechaFin: addMonths(formValue.fechaInicio, formValue.numberOfMonths),
      fechaFirma: formValue.fechaFirma,
      observacion: formValue.observacion,
    };
  }
}
