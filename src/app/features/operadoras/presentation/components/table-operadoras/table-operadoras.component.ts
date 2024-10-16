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
import { OperatorFacade } from '../../../helpers/operator.facade';
import { Operator } from '../../../interfaces/operator.interface';

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
  dataSource: MatTableDataSource<Operator> = new MatTableDataSource<Operator>(
    []
  );

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  operatorFacde = inject(OperatorFacade);
  ngOnInit(): void {
    this.loadOperators();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadOperators(): void {
    this.operatorFacde.getAllEntities().subscribe({
      next: (operators) => {
        this.dataSource.data = operators;
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
