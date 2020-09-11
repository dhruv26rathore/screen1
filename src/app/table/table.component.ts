import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  role: string;
  valid_from: string;
  valid_to: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'},
  {role: 'Merchant', valid_from: '2017', valid_to: '2020'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['role', 'role_status_type', 'role_status', 'valid_from','valid_to'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
