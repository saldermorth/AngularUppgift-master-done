import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SkidItem } from 'src/app/entities/skid-paket';

import { __importDefault } from 'tslib';

@Component({
  selector: 'app-skidpaket',
  templateUrl: './skidpaket.component.html',
  styleUrls: ['./skidpaket.component.scss'],
})
export class SkidpaketComponent implements OnInit {
  @Input()
  skidoritem?: SkidItem;

  extrainfo: boolean = false;

  @Output()
  valtpaket = new EventEmitter<SkidItem>();

  constructor() {}

  ngOnInit(): void {}

  Clicked() {
    this.valtpaket.emit(this.skidoritem);
  }

  toggleExtraInfo() {
    this.extrainfo = !this.extrainfo;
  }
}
