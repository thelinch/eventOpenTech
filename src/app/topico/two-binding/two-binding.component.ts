import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-two-binding",
  templateUrl: "./two-binding.component.html",
  styleUrls: ["./two-binding.component.css"]
})
export class TwoBindingComponent implements OnInit {
  pelicula;
  constructor() {
    this.pelicula = { name: "Una pelicula", status: true };
  }

  ngOnInit() {}
}
