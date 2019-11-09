import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicExampleComponent } from "./basic-example/basic-example.component";
import { ConsumingApiComponent } from "./consuming-api/consuming-api.component";
import { RjxsRoutingModule } from "./rxjs.rounting.module";

@NgModule({
  declarations: [BasicExampleComponent, ConsumingApiComponent],
  imports: [CommonModule, RjxsRoutingModule]
})
export class RxjsModule {}
