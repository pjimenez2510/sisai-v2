import { Component } from '@angular/core';
import { TableOperadorasComponent } from '../../components/table-operadoras/table-operadoras.component';

@Component({
  selector: 'app-list-operadoras',
  standalone: true,
  imports: [TableOperadorasComponent],
  templateUrl: './list-operadoras.component.html',
  styleUrl: './list-operadoras.component.css'
})
export class ListOperadorasComponent {

}
