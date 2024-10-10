import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Validators } from 'angular-reactive-validation';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { MaterialModule } from '../../../../../material.module';

@Component({
  selector: 'app-form-operadora',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReactiveValidationModule,
    MaterialModule
  ],
  templateUrl: './form-operadora.component.html',
  styleUrl: './form-operadora.component.css',
})
export class FormOperadoraComponent {
  private _formBuilder = inject(FormBuilder);
  operatorFormGroup!: FormGroup;
  responsibleFormGroup!: FormGroup;

  constructor() {
    this.operatorFormGroup = this._formBuilder.group({
      name: ['', Validators.required('El nombre es requerido')],
      ruc: ['', Validators.required('El ruc es requerido')],
      phone1: ['', Validators.required('El telefono 1 es requerido')],
      phone2: [''],
      address: ['', Validators.required('La dirección es requerida')],
      observation: [''],
    });
    this.responsibleFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required('Los nombres son requeridos')],
      lastName: ['', Validators.required('Los apellidos son requeridos')],
      email: ['', [Validators.required('El email es requerido'), Validators.email("El email no es valido")]],
      phone: ['', Validators.required('El telefono es requerido')],
    });
  }
  isLinear = false;
}
