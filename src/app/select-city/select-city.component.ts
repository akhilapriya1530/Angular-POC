import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { City } from "../types";

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.component.html",
  styleUrls: ["./select-city.component.scss"]
})
export class SelectCityComponent implements OnInit {
  cities: City[] = [];

  selectedCity: City | null = null;
  updatedCity: City | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCities$.subscribe(res => this.cities.push(...res));
  }

  update() {
    if (this.selectedCity) {
      this.updatedCity = { ...this.selectedCity };
    }
  }
}
