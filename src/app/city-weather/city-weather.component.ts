import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { ApiService } from "../api.service";
import { City, WeatherInfos } from "../types";

@Component({
  selector: "app-city-weather",
  templateUrl: "./city-weather.component.html",
  styleUrls: ["./city-weather.component.scss"]
})
export class CityWeatherComponent implements OnChanges, OnInit {
  @Input()
  city: City | null = null;

  weatherInfo: WeatherInfos | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  ngOnChanges(simpleChange: SimpleChanges) {
    if (this.city) {
      this.apiService
        .getWeather$(this.city)
        .subscribe(res => (this.weatherInfo = res));
    }
  }
}
