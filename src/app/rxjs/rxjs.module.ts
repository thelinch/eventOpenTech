import { RickAndMortyService } from "./services/rick-and-morty.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicExampleComponent } from "./basic-example/basic-example.component";
import { ConsumingApiComponent } from "./consuming-api/consuming-api.component";
import { RjxsRoutingModule } from "./rxjs.rounting.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [BasicExampleComponent, ConsumingApiComponent],
  imports: [CommonModule, RjxsRoutingModule, HttpClientModule],
  providers: [RickAndMortyService]
})
export class RxjsModule {}
