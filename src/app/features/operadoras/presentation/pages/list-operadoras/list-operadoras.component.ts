import { Component, inject, OnInit } from '@angular/core';
import { MetaTable } from '../../../../../shared/interfaces/meta-table.interface';
import { OperatorModel } from '../../../domain/models/operator.model';
import { MatTableDataSource } from '@angular/material/table';
import { OperatorUseCases } from '../../../domain/use-cases/operator.use-case';
import { TableAction } from '../../../../../shared/interfaces/table-action.interface';
import { TableComponent } from '../../../../../shared/components/table/table.component';

@Component({
  selector: 'app-list-operadoras',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './list-operadoras.component.html',
  styleUrl: './list-operadoras.component.css',
})
export class ListOperadorasComponent implements OnInit {
  displayedColumns: MetaTable[] = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Nombre' },
    { field: 'ruc', label: 'Ruc' },
    { field: 'phone1', label: 'Telefono' },
    { field: 'address', label: 'Dirección' },
    { field: 'responsible.firstName', label: 'Responsable' },
    { field: 'actions', label: 'Acciones' },
  ];

  dataSource: MatTableDataSource<OperatorModel> =
    new MatTableDataSource<OperatorModel>([]);

  ngOnInit(): void {
    this.loadOperators();
  }

  actions: TableAction[] = [
    {
      icon: 'visibility',
      tooltip: 'Ver',
      action: (row) => {
        console.log('Ver:', row);
      },
    },
    {
      icon: 'edit',
      tooltip: 'Editar',
      action: (row) => {
        console.log('Editar:', row);
      },
    },
  ];

  private operatorUseCases = inject(OperatorUseCases);

  loadOperators(): void {
    this.operatorUseCases.getAll().subscribe({
      next: (operators) => {
        this.dataSource.data = operators;
        console.log('Operators loaded:', operators);
      },
      error: (error) => {
        console.error('Error loading operators:', error);
      },
    });
  }
}
