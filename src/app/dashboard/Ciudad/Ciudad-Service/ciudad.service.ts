import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private httpClient:HttpClient) { }
  getAllCiudades():Observable<Ciudad[]>{
    return this.httpClient.get<Ciudad[]>("");
  }
  getCiudadById(id:number):Observable<Ciudad>{
    return this.httpClient.get<Ciudad>("" + id);
  }

  createCiudad(ciudad:Ciudad):Observable<Ciudad>{
    return this.httpClient.post<Ciudad>("",ciudad);
  }
  updateCiudad(ciudad:Ciudad):Observable<Ciudad>{
    return this.httpClient.put<Ciudad>(""+ciudad.id,ciudad);
  }
}
