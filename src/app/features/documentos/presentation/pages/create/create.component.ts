import { Component } from '@angular/core';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormRegisterComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {}
