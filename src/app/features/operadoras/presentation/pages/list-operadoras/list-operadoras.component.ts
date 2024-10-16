import { Component, inject } from '@angular/core';
import { TableOperadorasComponent } from '../../components/table-operadoras/table-operadoras.component';
import { Operator } from '../../../interfaces/operator.interface';
import { OperatorFacade } from '../../../helpers/operator.facade';
import { GenericTableComponent } from '../../../../../shared/components/generic-table/generic-table.component';

@Component({
  selector: 'app-list-operadoras',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './list-operadoras.component.html',
  styleUrl: './list-operadoras.component.css',
})
export class ListOperadorasComponent {
  operators: Operator[] = [];
  columns = [
    { property: 'id', header: 'ID' },
    { property: 'name', header: 'Nombre' },
    { property: 'ruc', header: 'RUC' },
    { property: 'phone1', header: 'Teléfono' },
    { property: 'address', header: 'Dirección' },
    { property: 'responsible.firstName', header: 'Nombre del Responsable' },
    { property: 'responsible.lastName', header: 'Apellido del Responsable' },
    {
      property: 'actions',
      header: 'Acciones',
      isAction: true,
      actions: [
        {
          name: 'view',
          tooltip: 'Ver',
          ariaLabel: 'Ver',
          icon: 'visibility',
          class: 'btn-view',
        },
        {
          name: 'edit',
          tooltip: 'Editar',
          ariaLabel: 'Editar',
          icon: 'edit',
          class: 'btn-edit',
        },
      ],
    },
  ];

  operatorFacade = inject(OperatorFacade);

  ngOnInit() {
    this.loadOperators();
  }

  loadOperators() {
    this.operatorFacade.getAllEntities().subscribe({
      next: (operators) => {
        this.operators = operators;
      },
    });
  }

  onActionClick(event: { action: string; row: Operator }) {
    switch (event.action) {
      case 'view':
        // Lógica para ver operadora
        console.log('Ver operadora', event.row);
        break;
      case 'edit':
        // Lógica para editar operadora
        console.log('Editar operadora', event.row);
        break;
    }
  }
}
