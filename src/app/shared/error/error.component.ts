import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {

  texto:string = ''
  mostrar: boolean = false
  suscripcion: Subscription = new Subscription()

  constructor(private _imagenService: ImagenService) { 
    this.suscripcion = this._imagenService.getError().subscribe({
      next: data =>{
        this.texto = data
        this.mostrarMensaje()
      },
      error: () =>{

      },
      complete: () =>{

      },
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

  mostrarMensaje(){
    this.mostrar = true
    setTimeout(() =>{
      this.mostrar = false
    },3000)
  }

}
