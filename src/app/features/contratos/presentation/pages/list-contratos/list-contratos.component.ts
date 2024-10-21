import { Component, inject } from '@angular/core';
import { Contract } from '../../../interfaces/contract.interface';
import { ContractFacade } from '../../../helpers/contract.facade';
import { GenericTableComponent } from '../../../../../shared/components/generic-table/generic-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contratos',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './list-contratos.component.html',
  styleUrl: './list-contratos.component.css',
})
export class ListContratosComponent {
  router = inject(Router)
  contracts: Contract[] = [];
  columns = [
    { property: 'codigo', header: 'Codigo' },
    { property: 'numero', header: 'Número' },
    { property: 'tipoContrato.nombre', header: 'Tipo de contrato' },
    { property: 'cantidad', header: 'Cantidad' },
    { property: 'operadora.nombre', header: 'Operadora' },
    { property: 'fechaInicio', header: 'Fecha inicio' },
    { property: 'fechaFin', header: 'Fecha fin' },
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
        {
          name: 'increment',
          tooltip: 'Incrementar',
          ariaLabel: 'Incrementar',
          icon: 'add',
          class: 'btn-increment',
        },
      ],
    },
  ];

  contractFacade = inject(ContractFacade);

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.contractFacade.getAllEntities().subscribe({
      next: (response) => {
        this.contracts = response;
      },
    });
  }

  onActionClick(event: { action: string; row: Contract }) {
    switch (event.action) {
      case 'view':
        this.router.navigate([`/main/contratos/view/${event.row.codigo}`])
        break;
      case 'edit':
        console.log('Editar contrato', event.row);
        break;
      case 'increment':
        console.log('Incrementar contrato', event.row);
        break;
    }
  }
}
