import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { City, WeatherInfos } from "./types";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

const API_KEY = "1890fcd579ac51bb12f42af3ceed6428";

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private http: HttpClient) { }

  getCities$: Observable<City[]> = this.http.get<City[]>("/assets/cities.json")
    .pipe(
      //TODO to remove, for quick debug only
      tap(r => console.log(r))
    );

  getWeather$ = (city: City): Observable<WeatherInfos> =>this.http.get<WeatherInfos>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country
        }&units=metric&appid=${API_KEY}`
      )
      .pipe(
        //TODO to remove, for quick debug only
        tap(r => console.log(r))
      );
}
