import { Component, Input,  OnChanges,    OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ColumnDef {
  fieldName: string;
  headerName: string;
}

export interface TableDefination{
  columnDefns: ColumnDef[];
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input()
  tableDefn: TableDefination;

  @Input()
  columnData: any[];

   matTableDataSource: MatTableDataSource<any>;

  constructor() {}

  get columnDefns(): ColumnDef[]{
    return this.tableDefn.columnDefns;
  }

  get displayedColumns(): string[]{
    return this.columnDefns.map((colDefn) => colDefn.fieldName);
  }

  ngOnInit() {
    this.matTableDataSource = new MatTableDataSource<any>([]);
  }

  ngOnChanges(simpleChanges: SimpleChanges){
    if(simpleChanges.columnData){
      this.setColumnData(simpleChanges.columnData.currentValue);
    }
  }

  setColumnData(columnData: any[]){
    this.columnData = columnData;
    this.matTableDataSource = new MatTableDataSource<any>();
    this.matTableDataSource.data = columnData;
  }

}