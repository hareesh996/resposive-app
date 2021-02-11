import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListPageComponent } from './components/task-list-page/task-list-page.component';
import {MatTableModule} from '@angular/material/table';
import { HomeRoutingModule } from './home.routing.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TaskDataService } from './services/task-data.service';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    HomeRoutingModule
    ],
  declarations: [
    TaskListPageComponent, 
    DataTableComponent
  ],
  providers:[
    TaskDataService
  ]
})
export class HomeModule { }