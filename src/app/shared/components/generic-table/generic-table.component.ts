import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css',
})
export class GenericTableComponent {
  @Input() title: string = 'Lista de elementos';
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() showFilter: boolean = true;
  @Input() filterPlaceholder: string = 'Ej. Buscar...';
  @Input() noDataMessage: string = 'No hay datos para mostrar';
  @Input() pageSizeOptions: number[] = [5, 10, 25];
  @Input() paginatorAriaLabel: string = 'Seleccionar página';

  @Output() actionClick = new EventEmitter<{ action: string; row: any }>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];

  constructor() {
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = [];
  }

  ngOnInit() {
    this.displayedColumns = this.columns.map((col) => col.property);
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getValue(row: any, property: string): any {
    return property.split('.').reduce((o, i) => o[i], row);
  }

  onActionClick(action: string, row: any) {
    this.actionClick.emit({ action, row });
  }
}
