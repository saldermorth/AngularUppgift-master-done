import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SkidItem } from 'src/app/entities/skid-paket';
import { BookingNotificationService } from '../services/http-post-booking.service';
import { Bokning } from 'src/app/entities/bokning';
import { Bokningscomfirm } from 'src/app/entities/bokningscomfirm';
import { SharedVariables } from '../services/shared-variables';

@Component({
  selector: 'app-skid-form',
  templateUrl: './skid-form.component.html',
  styleUrls: ['./skid-form.component.scss'],
})
export class SkidFormComponent implements OnInit {
  namnet?: string;
  bokningssvar?: number;

  result?: Bokningscomfirm; //Svar format

  tillKvitto = new EventEmitter<Bokningscomfirm>();

  @Input()
  valtPaket?: SkidItem;

  @Output()
  avbryt = new EventEmitter<boolean>();

  @Output()
  kvittoInfo = new EventEmitter<Bokningscomfirm>();

  constructor(
    private _sharedVatiables: SharedVariables,
    private bookingservice: BookingNotificationService
  ) {} // http

  ngOnInit(): void {}

  emitter() {}

  Clicked(avbryt: boolean) {
    this.avbryt.emit(avbryt);
  }

  SkickaKvitto() {
    this.bokningssvar = this.valtPaket?.id;
    if (!this.namnet || !this.bokningssvar) {
      return;
    }
    const booking = new Bokning(this.namnet, this.bokningssvar); //skickar
    this.bookingservice
      .SkickaBokning(booking)
      .subscribe((svar: Bokningscomfirm) => {
        this.result = svar;
        this._sharedVatiables.setKvitto(svar);
        this.avbryt.emit(true);
        // Emittar här
      }); //får tilbaka
  }

  onSubmit(): void {
    this.tillKvitto.emit(this.result);
  }
  //Skicka till kvitto
}
