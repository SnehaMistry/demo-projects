import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-form',
  templateUrl: './multiple-form.component.html',
  styleUrls: ['./multiple-form.component.scss']
})
export class MultipleFormComponent implements OnInit {
  years: number[];
  makers: string[];
  model: string[];
  step : number;
  constructor() {
    this.years = [];
    this.makers = ['Toyota', 'Volkswagen', 'Tesla', 'BMW', 'Ferrari', 'Ford', 'Porsche', 'Honda', 'Lamborghini', 'Toyota', 'Bentley', 'Maserati'];
    this.model = ['MG5 EV Long Range', 'NEW MG ZS EV', 'MG HS Plug-in Hybrid', 'Tesla Model S', 'Tesla Model X', 'Tesla Cybertruck', 'Tesla Model Y', 'Tesla Model 3', 'Tata Bolt', 'Tata Vista', 'Tata Xenon', 'Tata Tigor', 'Tata Magic', 'Tata Safari'];
    for (let i = new Date().getFullYear(); i > 1990; --i) {
      this.years.push(i);
    }

    this.step = 1;
  }

  ngOnInit(): void {
  }

  public back(){
    (this.step > 1) ? this.step -= 1 : 0;
  }

  public continue(){
    (this.step <5) ? this.step += 1 : 0;
  }

}
