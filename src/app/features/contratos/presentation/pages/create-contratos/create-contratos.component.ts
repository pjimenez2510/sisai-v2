import { Component } from '@angular/core';
import { FormContratosComponent } from '../../components/form-contratos/form-contratos.component';

@Component({
  selector: 'app-create-contratos',
  standalone: true,
  imports: [FormContratosComponent],
  templateUrl: './create-contratos.component.html',
  styleUrl: './create-contratos.component.css',
})
export class CreateContratosComponent {}
