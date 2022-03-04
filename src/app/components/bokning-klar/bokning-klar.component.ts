import { Component, Input, OnInit, Output } from '@angular/core';
import { Bokningscomfirm } from 'src/app/entities/bokningscomfirm';
import { SkidItem } from 'src/app/entities/skid-paket';
import { SharedVariables } from '../services/shared-variables';

@Component({
  selector: 'app-bokning-klar',
  templateUrl: './bokning-klar.component.html',
  styleUrls: ['./bokning-klar.component.scss'],
})
export class BokningKlarComponent implements OnInit {
  constructor(private _sharedVariables: SharedVariables) {}

  @Output()
  bokatitem?: SkidItem;

  @Input()
  skidoritem?: SkidItem;

  //@Input()
  kvitto?: Bokningscomfirm;

  ngOnInit(): void {
    this.kvitto = this._sharedVariables.getKvitto();
  }
}
