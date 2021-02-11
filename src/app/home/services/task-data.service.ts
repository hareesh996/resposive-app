import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface TaskData{
  taskId: string;
  createdDate: string;
  subject: string;
  transactionType: string;
  transactionReason: string;
  taskStatus: string;
}

@Injectable()
export class TaskDataService{

  getTaskListData(): Observable<TaskData[]>{
    return of<TaskData[]>([
      {
        taskId: 'T1234',
        createdDate: '12/02/2020',
        subject: 'Address',
        taskStatus: 'Open',
        transactionReason: 'Change Email Address',
        transactionType: "Address Change"
      }
    ])
  }

}