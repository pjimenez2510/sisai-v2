import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  ReactiveValidationModule,
  Validators,
} from 'angular-reactive-validation';
import { MaterialModule } from '../../../../../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contratos',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReactiveValidationModule,
    MaterialModule,
  ],
  templateUrl: './form-contratos.component.html',
  styleUrl: './form-contratos.component.css',
})
export class FormContratosComponent {
  private _formBuilder = inject(FormBuilder);
  private router = inject(Router);

  generalInformationFormGroup!: FormGroup;
  addressFormGroup!: FormGroup;
  detailsContractFormGroup!: FormGroup;

  constructor() {
    this.generalInformationFormGroup = this._formBuilder.group({
      idOperator: [
        '',
        Validators.required('El número del contrato es requerido'),
      ],
      number: ['', Validators.required('El número del contrato es requerido')],
      idContractType: [
        '',
        Validators.required('El tipo del contrato es requerido'),
      ],
    });
    this.addressFormGroup = this._formBuilder.group({
      idProvince: ['', Validators.required('La provincia es requerida')],
      idCanton: ['', Validators.required('El canton es requerido')],
      idParroquia: ['', Validators.required('La parroquia es requerida')],
    });
    this.detailsContractFormGroup = this._formBuilder.group({
      signatureDate: [
        '',
        Validators.required('La fecha de firma es requerida'),
      ],
      startDate: ['', Validators.required('La fecha de inició es requerida')],
      numberOfMonths: [
        '',
        Validators.required('Los números de meses es requerido'),
      ],
      observation: [''],
      documento: [
        File,
        [Validators.required('El documento del contrato es requerido')],
      ],
    });
  }
  isLinear = true;

  save() {
    if (
      this.generalInformationFormGroup.valid &&
      this.detailsContractFormGroup.valid &&
      this.addressFormGroup.valid
    ) {
      const generalInformation = this.generalInformationFormGroup.value;
      const details = this.detailsContractFormGroup.value;
      const observations = this.addressFormGroup.value;
      console.log(generalInformation);
      console.log(details);
      console.log(observations);
    }
  }
}
