import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {

  nombreImagen:string= ''

  constructor( private _imagenService: ImagenService) { }

  ngOnInit() {
  }

  buscar():void{
    if(this.nombreImagen === ''){
      this._imagenService.setError('Pero que haces, escribe algo')
      return
    }

    this._imagenService.enviarTerminoBusqueda(this.nombreImagen)

  }

}
