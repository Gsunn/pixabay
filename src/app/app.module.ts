import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { BuscarImagenComponent } from './components/buscar-imagen/buscar-imagen.component'
import { ListadoImagenComponent } from './components/listado-imagen/listado-imagen.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ErrorComponent } from './shared/error/error.component'
import { SpinnerComponent } from './shared/spinner/spinner.component'


@NgModule({
  declarations: [
    AppComponent,
    BuscarImagenComponent,
    ListadoImagenComponent,
    NavbarComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
