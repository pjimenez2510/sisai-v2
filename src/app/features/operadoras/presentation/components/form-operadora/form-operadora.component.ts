import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { MaterialModule } from '../../../../../material.module';
import { OperatorFormStrategy } from '../../../strategies/operator-form.strategy';
import { ResponsibleFormStrategy } from '../../../strategies/responsible-form.strategy';

@Component({
  selector: 'app-form-operadora',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReactiveValidationModule,
    MaterialModule,
  ],
  templateUrl: './form-operadora.component.html',
  styleUrl: './form-operadora.component.css',
})
export class FormOperadoraComponent implements OnInit {
  operatorFormGroup!: FormGroup;
  responsibleFormGroup!: FormGroup;
  isLinear = true;
  operatorStrategy = inject(OperatorFormStrategy);
  responsibleStrategy = inject(ResponsibleFormStrategy);

  ngOnInit(): void {
    this.operatorFormGroup = this.operatorStrategy.createForm();
    this.responsibleFormGroup = this.responsibleStrategy.createForm();
  }

  save() {
    if (this.operatorFormGroup.valid && this.responsibleFormGroup.valid) {
      const operatorData = this.operatorFormGroup.value;
      const responsibleData = this.responsibleFormGroup.value;
    }
  }
}
