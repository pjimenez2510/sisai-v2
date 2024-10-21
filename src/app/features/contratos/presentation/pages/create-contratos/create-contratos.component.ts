import { Component } from '@angular/core';
import { FormContratosComponent } from '../../components/form-contratos/form-contratos.component';
import { MaterialModule } from '../../../../../material.module';

@Component({
  selector: 'app-create-contratos',
  standalone: true,
  imports: [FormContratosComponent, MaterialModule],
  templateUrl: './create-contratos.component.html',
  styleUrl: './create-contratos.component.css',
})
export class CreateContratosComponent {}
