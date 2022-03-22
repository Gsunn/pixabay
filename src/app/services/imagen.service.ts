import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private error$: Subject<string> = new Subject<string>()
  private terminoBusqueda$: Subject<string> = new Subject<string>()

  constructor(private _httpClient: HttpClient) { }

  setError(mensaje: string) {
    this.error$.next(mensaje)
  }

  getError(): Observable<string> {
    return this.error$.asObservable()
  }

  enviarTerminoBusqueda(termino:string):void{
    this.terminoBusqueda$.next(termino)
  }

  getTerminoBusqueda(): Observable<string>{
    return this.terminoBusqueda$.asObservable()
  }
  
  getImages(termino: string, imagenesPorPagina:number, paginaActual:number): Observable<any>{
    const APIKEY = '26249951-e45d7d989a6eb5d70e93b33c9'
    const URL = `https://pixabay.com/api/?key=${APIKEY}&q=${termino}&per_page=${imagenesPorPagina}&page=${paginaActual}`

    return this._httpClient.get(URL)
  }

}
