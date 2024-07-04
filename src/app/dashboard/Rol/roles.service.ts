import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor( private httpClient:HttpClient) { }

  getAllRoles():Observable<Rol[]>{
    return this.httpClient.get<Rol[]>("");
  }
  getRolById(id:number):Observable<Rol>{
    return this.httpClient.get<Rol>("" + id);
  }

  createRol(rol:Rol):Observable<Rol>{
    return this.httpClient.post<Rol>("",rol);
  }
  updateRol(rol:Rol):Observable<Rol>{
    return this.httpClient.put<Rol>(""+rol.idrol,rol);
  }






}
