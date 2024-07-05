import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  constructor( private httpClient:HttpClient) { }

  getAllUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>("");
  }
  getUsuarioById(id:number):Observable<Usuario>{
    return this.httpClient.get<Usuario>("" + id);
  }

  createUsuario(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>("",usuario);
  }
  updateUsuario(producto:Usuario):Observable<Usuario>{
    return this.httpClient.put<Usuario>(""+producto.id,producto);
  }

}
