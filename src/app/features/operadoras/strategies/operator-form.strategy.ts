import { inject, Injectable } from '@angular/core';
import { FormStrategy } from '../../../core/strategies/form-strategy.interface';
import { Operator } from '../interfaces/operator.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';

@Injectable({
  providedIn: 'root',
})
export class OperatorFormStrategy implements FormStrategy<Operator> {
  private formBuilder = inject(FormBuilder);

  createForm(): FormGroup {
    return this.formBuilder.group({
      nombre: ['', Validators.required('El nombre es requerido')],
      ruc: ['', Validators.required('El ruc es requerido')],
      telefono1: ['', Validators.required('El telefono 1 es requerido')],
      telefono2: [''],
      direccion: ['', Validators.required('La dirección es requerida')],
      observacion: [''],
    });
  }
  patchFormValues(form: FormGroup, entity: Operator): void {
    form.patchValue({
        ...entity
    })
  }
  prepareEntityData(form: FormGroup) {
    const formValue = form.value
    return formValue
  }
}
