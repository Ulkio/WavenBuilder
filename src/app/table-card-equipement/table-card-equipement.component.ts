import { Component, Input, isDevMode, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Patch } from '../struct';

@Component({
  selector: 'app-table-card-equipement',
  templateUrl: './table-card-equipement.component.html',
  styleUrls: ['./table-card-equipement.component.css'],
})
export class TableCardEquipementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() patchs!: Patch[];
  baseHref!: string;
  dataLength!: number;
  dataSource!: MatTableDataSource<Patch>;

  displayedColumns = ['Patch', 'Pouvoir', 'Caractéristiques', 'Dons'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Patch>(this.patchs);
    this.dataLength = this.patchs.length;
    this.baseHref = isDevMode() ? '../..' : 'WavenBuilder';
  }
}
