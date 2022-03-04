import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkidpaketComponent } from './components/skidpaket/skidpaket.component';
import { SkidPaketListaComponent } from './components/skid-paket-lista/skid-paket-lista.component';
import { SkidFormComponent } from './components/skid-form/skid-form.component';
import { BokningKlarComponent } from './components/bokning-klar/bokning-klar.component';
import { SharedVariables } from './components/services/shared-variables';

@NgModule({
  declarations: [
    AppComponent,
    SkidpaketComponent,
    SkidPaketListaComponent,
    SkidFormComponent,

    BokningKlarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [SharedVariables],
  bootstrap: [AppComponent],
})
export class AppModule {}
