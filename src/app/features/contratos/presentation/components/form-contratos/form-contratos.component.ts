import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { MaterialModule } from '../../../../../material.module';
import { ContractGeneralInformationFormStrategy } from '../../../strategies/contract-general-information-form.strategy';
import { ContractSectorFormStrategy } from '../../../strategies/contract-sector-form.strategy';
import { Operator } from '../../../../operadoras/interfaces/operator.interface';
import { ContractType } from '../../../interfaces/contract-type.interface';

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
export class FormContratosComponent implements OnInit {
  generalInformationFormGroup!: FormGroup;
  sectorFormGroup!: FormGroup;
  isLinear = true;

  generalInformatioStrategy = inject(ContractGeneralInformationFormStrategy);
  sectorStrategy = inject(ContractSectorFormStrategy);
  operators: Operator[] = [];
  contractTypes: ContractType[] = [];

  ngOnInit(): void {
    this.generalInformationFormGroup =
      this.generalInformatioStrategy.createForm();
    this.sectorFormGroup = this.sectorStrategy.createForm();
    this.operators = this.generalInformatioStrategy.operatorOptions;
    this.contractTypes = this.generalInformatioStrategy.contractTypeOptions;
  }

  save() {
    const generalInformation = this.generalInformationFormGroup.value;
    console.log(generalInformation);
    if (this.generalInformationFormGroup.valid && this.sectorFormGroup.valid) {
      const generalInformation = this.generalInformationFormGroup.value;
      const observations = this.sectorFormGroup.value;
      console.log(generalInformation);
      console.log(observations);
    }
  }
}
