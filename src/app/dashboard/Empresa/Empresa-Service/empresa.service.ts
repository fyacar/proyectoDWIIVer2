import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor( private httpClient:HttpClient) { }

  getAllEmpresas():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>("");
  }
  getEmpresaById(id:number):Observable<Empresa>{
    return this.httpClient.get<Empresa>("" + id);
  }

  createEmpresa(empresa:Empresa):Observable<Empresa>{
    return this.httpClient.post<Empresa>("",empresa);
  }
  updateEmpresa(empresa:Empresa):Observable<Empresa>{
    return this.httpClient.put<Empresa>(""+empresa.id,empresa);
  }

}
