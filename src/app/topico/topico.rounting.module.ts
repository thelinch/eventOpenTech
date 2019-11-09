import { InjectionDependencyComponent } from "./injection-dependency/injection-dependency.component";
import { TwoBindingComponent } from "./two-binding/two-binding.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  {
    path: "twoBinding",
    component: TwoBindingComponent
  },
  {
    path: "injectionDependency",
    component: InjectionDependencyComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicoRoutingModule {}
