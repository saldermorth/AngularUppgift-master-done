import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bokningscomfirm } from './entities/bokningscomfirm';
import { SkidItem } from './entities/skid-paket';
import { SharedVariables } from './components/services/shared-variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //Bools för att visa eller dörlja komponenter
  visaLista: boolean = true;
  visaForm: boolean = false;
  visaBokningKlar: boolean = false;

  skidpaket?: SkidItem;
  kvittoKlart?: Bokningscomfirm;

  @Output()
  kvittoOutput = new EventEmitter<Bokningscomfirm>();

  @Output()
  bokatpaket = new EventEmitter<SkidItem>();

  constructor() {}

  ngOnInit(): void {}

  hanteraVal(paket: SkidItem) {
    console.log(paket.header + ' valt');
    this.visaLista = false;
    this.visaForm = true;
    this.skidpaket = paket;
    this.bokatpaket.emit(this.skidpaket);
    this.bokatpaket.next(this.skidpaket);
  }

  //körs inte
  hanteraKvitto(kvitto: Bokningscomfirm) {
    this.kvittoKlart = kvitto;
    this.kvittoOutput.emit(this.kvittoKlart);
  }

  //Körs
  hanteraAvbryt(formVal: boolean) {
    if (formVal) {
      this.visaBokningKlar = true;
      this.visaLista = false;
      this.visaForm = false;
      this.bokatpaket.emit(this.skidpaket); // skicka valt skidpaket till bokningbekräftelsen
    } else {
      this.visaLista = true;
      this.visaForm = false;
    }
  }
}
