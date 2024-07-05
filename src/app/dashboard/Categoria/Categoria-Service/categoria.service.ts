import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private httpClient:HttpClient) { }

  getAllCategorias():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>("");
  }
  getCategoriaById(id:number):Observable<Categoria>{
    return this.httpClient.get<Categoria>("" + id);
  }

  createCategoria(categoria:Categoria):Observable<Categoria>{
    return this.httpClient.post<Categoria>("",categoria);
  }
  updateCategoria(categoria:Categoria):Observable<Categoria>{
    return this.httpClient.put<Categoria>(""+categoria.id,categoria);
  }

}
