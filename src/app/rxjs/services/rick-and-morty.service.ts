import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RickAndMortyService {
  private url = "https://rickandmortyapi.com/api/";
  constructor(private _http: HttpClient) {}
  get(): Observable<any> {
    return this._http
      .get<any>(this.url + "character")
      .pipe(map(schema => schema.results));
  }
}
