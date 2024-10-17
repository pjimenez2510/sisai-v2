import { inject, Injectable } from '@angular/core';
import { FormStrategy } from '../../../core/strategies/form-strategy.interface';
import { Contract } from '../interfaces/contract.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';
import {
  Canton,
  CreateSector,
  Parroquia,
  Provincia,
  Sector,
} from '../interfaces/sector.interface';
import { SectorFacade } from '../helpers/sector.facede';
import { map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractSectorFormStrategy implements FormStrategy<Sector> {
  private formBuilder = inject(FormBuilder);

  provincias: Provincia[] = [];
  cantones: Canton[] = [];
  parroquias: Parroquia[] = [];

  sectorFacade = inject(SectorFacade);

  createForm(): FormGroup {
    return this.formBuilder.group({
      codigoProvincia: ['', [Validators.required('La provincia es requerida')]],
      codigoCanton: ['', [Validators.required('El canton es requerido')]],
      codigoParroquia: ['', [Validators.required('La parroquia es requerida')]],
      sectores: ['', [Validators.required('Los sectores son requeridos')]],
      direcciones: [
        '',
        [Validators.required('Las direcciones son requeridas')],
      ],
    });
  }

  patchFormValues(form: FormGroup, entity: Sector): void {
    form.patchValue({
      codigoProvincia: entity.provincia.codigo,
      codigoCanton: entity.canton.codigo,
      codigoParroquia: entity.parroquia.codigo,
      sectores: entity.sectores,
      direcciones: entity.direcciones,
    });
  }

  prepareEntityData(form: FormGroup): CreateSector {
    return form.value;
  }

  loadData() {
    this.sectorFacade.getAllProvincias().subscribe((response) => {
      this.provincias = response;
    });
  }

  /* initCantonFilter(form: FormGroup) {
    return form.get('codigoProvincia')?.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filterOperators(value))
    );
  }

  private _filterOperators(value: string): Operator[] {
    const filterValue = value.toLowerCase();
    return this.operatorOptions.filter((option) =>
      option.nombre.toLowerCase().includes(filterValue)
    );
  } */
}
