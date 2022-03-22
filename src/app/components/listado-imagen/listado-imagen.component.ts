import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listado-imagen',
  templateUrl: './listado-imagen.component.html',
  styleUrls: ['./listado-imagen.component.css']
})
export class ListadoImagenComponent implements OnInit {

  termino:string = ''
  suscripcion: Subscription = new Subscription()
  listadoImagenes: any[] = []
  loading:boolean = false
  imagenesPorPagina:number = 8
  paginaActual:number = 1
  totalPaginas:number = 0

  constructor(private _imagenService: ImagenService) { 
    this.suscripcion = this._imagenService.getTerminoBusqueda().subscribe({
      next: data => {
        this.termino = data
        this.paginaActual = 1
        this.obternerImagenes()
      }
    })
  }

  ngOnInit() { }

  obternerImagenes(){
    this.loading = true
    let body = document.querySelector('body')
    this._imagenService.getImages(this.termino, this.imagenesPorPagina, this.paginaActual).subscribe({
      next: data =>{        
        let totalResultados = data.totalHits
        if(totalResultados === 0 ){
          this._imagenService.setError('Ooops...no hay resultados!')
        }else{
          this.listadoImagenes = data.hits
          this.calcularTotalPaginas(totalResultados)
        } 
        this.loading = false       
        body?.setAttribute('style', 'height: 100% !important')
      },
      error: error =>{
        this._imagenService.setError('Ooops...se produjo un error!')
        this.loading = false
      }
    })
  }

  calcularTotalPaginas(totalResultados:number){
    this.totalPaginas  = Math.ceil(totalResultados / this.imagenesPorPagina)
  }

  paginate(event: any){
    event.preventDefault()

    if(event.target.hasAttribute('data-action')){
      if(event.target.dataset.action === 'inc'){ 
        // console.log('++')
        this.paginaActual++
      }else{
        // console.log('--')
        this.paginaActual--
      }
    }
    this.obternerImagenes()


  }

}
