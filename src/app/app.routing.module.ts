import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "rxjs",
    loadChildren: () =>
      import("./rxjs/rxjs.module").then(rxjs => rxjs.RxjsModule)
  },
  {
    path: "topico",
    loadChildren: () =>
      import("./topico/topico.module").then(topico => topico.TopicoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
