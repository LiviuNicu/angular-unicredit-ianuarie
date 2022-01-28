import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss'],
})
export class VaccinesComponent implements OnInit {
  public vaccines: any;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.countryABObservable.subscribe((countryAb: string) => {
      this.mainService
        .getVaccines('ab', countryAb)
        .subscribe((response: any) => {
          console.log(response);
          this.vaccines = response.All;
        });
    });

    this.mainService.countryObservable
      .pipe(debounceTime(500))
      .subscribe((countryName: string) => {
        this.mainService
          .getVaccines('country', countryName)
          .subscribe((response: any) => {
            console.log(response);
            this.vaccines = response.All;
          });
      });
  }
}
