import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { MaterialModule } from '../../../../../material.module';
import { ContractGeneralInformationFormStrategy } from '../../../strategies/contract-general-information-form.strategy';
import { ContractSectorFormStrategy } from '../../../strategies/contract-sector-form.strategy';
import { Operator } from '../../../../operadoras/interfaces/operator.interface';
import { ContractType } from '../../../interfaces/contract-type.interface';
import { Canton, Parroquia, Provincia } from '../../../interfaces/sector.interface';

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
  isLinear = true;
  
  generalInformationFormGroup!: FormGroup;
  generalInformatioStrategy = inject(ContractGeneralInformationFormStrategy);
  sectorStrategy = inject(ContractSectorFormStrategy);
  operators: Operator[] = [];
  contractTypes: ContractType[] = [];
 fileName: string = '';

  sectorFormGroup!: FormGroup;
  provincias: Provincia[] = []
  cantones: Canton[] = []
  parroquias: Parroquia[] = []
  
  ngOnInit(): void {
    this.generalInformationFormGroup =
      this.generalInformatioStrategy.createForm();
      this.operators = this.generalInformatioStrategy.operatorOptions;
      this.contractTypes = this.generalInformatioStrategy.contractTypeOptions;

      this.sectorFormGroup = this.sectorStrategy.createForm();
      this.provincias = this.sectorStrategy.provincias;
      
  }

  onChangeProvince(value: string) {
    this.sectorFormGroup.get('codigoCanton')?.setValue(null)
    this.sectorFormGroup.get('codigoParroquia')?.setValue(null)
    if(!value) {
      this.cantones = []
      return
    }
    this.sectorStrategy.changeProvince(value).subscribe((response) => {
      this.cantones = response
    })
  }

 onChangeCanton(value: string) {
    this.sectorFormGroup.get('codigoParroquia')?.setValue(null)
    if(!value) {
      this.parroquias = []
      return
    }
    this.sectorStrategy.changeCanton(value).subscribe((response) => {
      this.parroquias = response
    })
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

 onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.generalInformationFormGroup.patchValue({
        documento: file
      });
      this.generalInformationFormGroup.get('file')?.updateValueAndValidity();
    }
  }


}
