import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableAction } from '../../interfaces/table-action.interface';
import { MaterialModule } from '../../../material.module';
import { MetaTable } from '../../interfaces/meta-table.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() displayedColumns: MetaTable[] = [];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  @Input() title: string = 'Lista';
  @Input() actions: TableAction[] = []; // Recibe las acciones dinámicas

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  get allColumns() {
    return [...this.displayedColumns.map((c) => c.field)];
  }
  ngOnInit(): void {
    console.log('TableComponent initialized');
    console.log('displayedColumns:', this.displayedColumns);
    console.log('dataSource:', this.dataSource);
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
}
