import { Injectable } from '@angular/core';
import { Bokningscomfirm } from 'src/app/entities/bokningscomfirm';

@Injectable()
export class SharedVariables {
  kvitto?: Bokningscomfirm;

  getKvitto() {
    return this.kvitto;
  }

  setKvitto(inputKvitto: Bokningscomfirm) {
    this.kvitto = inputKvitto;
  }
}
