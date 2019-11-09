import { Component, OnInit } from "@angular/core";
import { timer, of, concat, empty, Observable } from "rxjs";
import { takeWhile, delay, startWith } from "rxjs/operators";

@Component({
  selector: "app-basic-example",
  templateUrl: "./basic-example.component.html",
  styleUrls: ["./basic-example.component.css"]
})
export class BasicExampleComponent implements OnInit {
  // timer$;
  // conbination$;
  observableCreate$;
  constructor() {}

  ngOnInit() {
    //Estructura basica de un Observable
    this.observableCreate$ = Observable.create(observer => {
      observer.next("holAAAAAAAAA");
      setTimeout(() => {
        observer.next("Como estan??");
        observer.complete();
      }, 1000);
    });
    /*this.timer$ = timer(1000, 2000).pipe(takeWhile(val => val <= 10));
    this.conbination$ = concat(
      this.delayedMessage("Estan Listo!"),
      this.delayedMessage(3),
      this.delayedMessage(2),
      this.delayedMessage(1),
      this.delayedMessage("Go!")
    );*/
  }
  delayedMessage(message, delayedTime = 1000) {
    return empty().pipe(
      startWith(message),
      delay(delayedTime)
    );
  }
}
