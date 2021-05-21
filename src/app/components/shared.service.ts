import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get("https://jsonkeeper.com/b/UA1B");
  }
}
