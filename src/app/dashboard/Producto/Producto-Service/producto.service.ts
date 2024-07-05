import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  
  constructor( private httpClient:HttpClient) { }

  getAllProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>("");
  }
  getProductoById(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>("" + id);
  }

  createProducto(producto:Producto):Observable<Producto>{
    return this.httpClient.post<Producto>("",producto);
  }
  updateProducto(producto:Producto):Observable<Producto>{
    return this.httpClient.put<Producto>(""+producto.id,producto);
  }

}
