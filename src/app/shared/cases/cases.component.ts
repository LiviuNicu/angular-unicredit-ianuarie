import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent implements OnInit {
  public cases: any = {};
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.countryABObservable.subscribe((countryAb: string) => {
      this.mainService.getCases('ab', countryAb).subscribe((response: any) => {
        console.log(response);
        this.cases = response.All;
      });
    });

    this.mainService.countryObservable
      .pipe(debounceTime(500))
      .subscribe((countryName: string) => {
        this.mainService
          .getCases('country', countryName)
          .subscribe((response: any) => {
            console.log(response);
            this.cases = response.All;
          });
      });
  }
}
