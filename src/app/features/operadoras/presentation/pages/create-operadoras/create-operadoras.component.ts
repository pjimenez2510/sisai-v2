import { Component } from '@angular/core';
import { FormOperadoraComponent } from '../../components/form-operadora/form-operadora.component';

@Component({
  selector: 'app-create-operadoras',
  standalone: true,
  imports: [FormOperadoraComponent],
  templateUrl: './create-operadoras.component.html',
  styleUrl: './create-operadoras.component.css'
})
export class CreateOperadorasComponent {

}
