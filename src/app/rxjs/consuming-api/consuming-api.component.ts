import { RickAndMortyService } from "./../services/rick-and-morty.service";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consuming-api",
  templateUrl: "./consuming-api.component.html",
  styleUrls: ["./consuming-api.component.css"]
})
export class ConsumingApiComponent implements OnInit {
  characters$: Observable<any[]>;
  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.characters$ = this.rickAndMortyService.get();
  }
}
