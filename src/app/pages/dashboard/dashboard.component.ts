import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public countriesListArray: any[] = [
    {
      name: 'Romania',
      ab: 'RO',
    },
    {
      name: 'France',
      ab: 'FR',
    },
    {
      name: 'United Kingdom',
      ab: 'GB',
    },
  ];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {}

  chooseCountry(contryAB: string) {
    console.log('country ab from dashboard', contryAB);
    this.mainService.updateCountryAB(contryAB);
  }
}
