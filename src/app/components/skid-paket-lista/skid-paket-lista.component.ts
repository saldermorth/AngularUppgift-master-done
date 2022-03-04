import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkidItem } from 'src/app/entities/skid-paket';
import { HttpGetProductsService } from '../services/http-get-products.service';

@Component({
  selector: 'app-skid-paket-lista',
  templateUrl: './skid-paket-lista.component.html',
  styleUrls: ['./skid-paket-lista.component.scss'],
})
export class SkidPaketListaComponent implements OnInit {
  skidoritemarray?: SkidItem[];

  @Output()
  valtpaket = new EventEmitter<SkidItem>();
  constructor(private httpService: HttpGetProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.httpService.getProducts().subscribe((response: Array<SkidItem>) => {
      this.skidoritemarray = response;
      console.log(response);
    });
  }

  IncomingMessage(paket: SkidItem) {
    this.valtpaket.emit(paket);
  }
}
