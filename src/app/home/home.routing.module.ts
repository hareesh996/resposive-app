import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TaskListPageComponent } from "./components/task-list-page/task-list-page.component";

const routes: Routes = [
  {
    path: "",
    component: TaskListPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
