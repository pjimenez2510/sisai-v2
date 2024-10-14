import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../../../material.module';
import { OperatorModel } from '../../../domain/models/operator.model';
import { OperatorUseCases } from '../../../domain/use-cases/operator.use-case';

@Component({
  selector: 'app-table-operadoras',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table-operadoras.component.html',
  styleUrl: './table-operadoras.component.css',
})
export class TableOperadorasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'ruc',
    'phone1',
    'address',
    'responsible',
    'actions',
  ];
  dataSource: MatTableDataSource<OperatorModel> =
    new MatTableDataSource<OperatorModel>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private operatorUseCases = inject(OperatorUseCases);

  ngOnInit(): void {
    this.loadOperators();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
