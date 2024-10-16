import { inject, Injectable } from '@angular/core';
import { FormStrategy } from '../../../core/strategies/form-strategy.interface';
import { Responsible } from '../interfaces/responsible.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';

@Injectable({
  providedIn: 'root',
})
export class ResponsibleFormStrategy implements FormStrategy<Responsible> {
  private formBuilder = inject(FormBuilder);

  createForm(): FormGroup {
    return this.formBuilder.group({
      nombres: ['', Validators.required('Los nombres son requeridos')],
      apellidos: ['', Validators.required('Los apellidos son requeridos')],
      email: [
        '',
        [
          Validators.required('El email es requerido'),
          Validators.email('El email no es valido'),
        ],
      ],
      telefono: ['', Validators.required('El telefono es requerido')],
    });
  }
  patchFormValues(form: FormGroup, entity: Responsible): void {
    form.patchValue({
      nombres: entity.nombres,
      apellidos: entity.apellidos,
      email: entity.email,
      telefono: entity.telefono,
    });
  }
  prepareEntityData(form: FormGroup) {
    const formValue = form.value;
    return formValue;
  }
}
