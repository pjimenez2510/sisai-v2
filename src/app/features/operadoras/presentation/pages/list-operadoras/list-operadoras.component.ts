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
    { property: 'codigo', header: 'Codigo' },
    { property: 'nombre', header: 'Nombre' },
    { property: 'ruc', header: 'RUC' },
    { property: 'telefono1', header: 'Teléfono' },
    { property: 'direccion', header: 'Dirección' },
    { property: 'responsable.nombres', header: 'Nombre del Responsable' },
    { property: 'responsable.apellidos', header: 'Apellido del Responsable' },
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
        console.log('Ver operadora', event.row);
        break;
      case 'edit':
        console.log('Editar operadora', event.row);
        break;
    }
  }
}
