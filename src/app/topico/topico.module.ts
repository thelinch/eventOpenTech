import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { TwoBindingComponent } from "./two-binding/two-binding.component";
import { InjectionDependencyComponent } from "./injection-dependency/injection-dependency.component";
import { TopicoRoutingModule } from "./topico.rounting.module";

@NgModule({
  declarations: [TwoBindingComponent, InjectionDependencyComponent],
  imports: [CommonModule, TopicoRoutingModule, FormsModule]
})
export class TopicoModule {}
