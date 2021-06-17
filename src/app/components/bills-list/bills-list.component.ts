import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from './../../shared/data.service';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillsListComponent implements OnInit, AfterViewInit {
  title = 'Список счетов'
  displayedColumns: string[] = ['created', 'billNumber', 'status', 'billTotal', 'paymentMethod'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = null

  constructor (private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.getAll());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
