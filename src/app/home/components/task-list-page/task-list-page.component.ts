import { Component, OnInit } from "@angular/core";
import { TaskDataService, TaskData } from "../../services/task-data.service";
import { TableDefination } from "../data-table/data-table.component";

@Component({
  selector: "app-task-list-page",
  templateUrl: "./task-list-page.component.html",
  styleUrls: ["./task-list-page.component.css"]
})
export class TaskListPageComponent implements OnInit {
  postBindRequestTasks: TableDefination;
  postBindTaskData: TaskData[] = [];

  constructor(private taskDataSvc: TaskDataService) {}

  ngOnInit() {
    this.postBindRequestTasks = {
      columnDefns: [
        {
          fieldName: "taskId",
          headerName: "Task Id"
        },
        {
          fieldName: "createdDate",
          headerName: "Created Date"
        },
        {
          fieldName: "subject",
          headerName: "Subject"
        },
        {
          fieldName: "taskStatus",
          headerName: "Task Status"
        },
        {
          fieldName: "transactionType",
          headerName: "Transaction Type"
        },
        {
          fieldName: "transactionReason",
          headerName: "Transaction Reason"
        }
      ]
    };
    this.taskDataSvc.getTaskListData().subscribe(response => {
      this.postBindTaskData = response;
    });
  }
}
