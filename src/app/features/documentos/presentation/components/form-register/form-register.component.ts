import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
})
export class FormRegisterComponent {
  private _formBuilder = inject(FormBuilder);

  operatorFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    ruc: ['', Validators.required],
    phone1: ['', Validators.required],
    phone2: [''],
    address: ['', Validators.required],
    observation: [''],
  });
  responsibleFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });
  isLinear = true;
}
