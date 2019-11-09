import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TwoBindingComponent } from "./two-binding/two-binding.component";
import { InjectionDependencyComponent } from "./injection-dependency/injection-dependency.component";
import { TopicoRoutingModule } from "./topico.rounting.module";

@NgModule({
  declarations: [TwoBindingComponent, InjectionDependencyComponent],
  imports: [CommonModule, TopicoRoutingModule]
})
export class TopicoModule {}
