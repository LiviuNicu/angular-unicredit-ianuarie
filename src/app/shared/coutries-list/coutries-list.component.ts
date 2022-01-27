import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coutries-list',
  templateUrl: './coutries-list.component.html',
  styleUrls: ['./coutries-list.component.scss'],
})
export class CoutriesListComponent implements OnInit {
  @Input() countries: any[] = [];
  @Output() onCountryChanged: EventEmitter<string> = new EventEmitter();
  public selectedCountry: any;
  constructor() {}

  ngOnInit(): void {}

  countryChanged() {
    console.log(this.selectedCountry);
    this.onCountryChanged.emit(this.selectedCountry);
  }
}
