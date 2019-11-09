import { ConsumingApiComponent } from "./consuming-api/consuming-api.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicExampleComponent } from "./basic-example/basic-example.component";

export const routes: Routes = [
  {
    path: "basicExample",
    component: BasicExampleComponent
  },
  {
    path: "consumingApi",
    component: ConsumingApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RjxsRoutingModule {}
