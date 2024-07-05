import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  
  constructor( private httpClient:HttpClient) { }

  getAllReservas():Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>("");
  }
  getReservaById(id:number):Observable<Reserva>{
    return this.httpClient.get<Reserva>("" + id);
  }

  createReserva(reserva:Reserva):Observable<Reserva>{
    return this.httpClient.post<Reserva>("",reserva);
  }
  updateReserva(reserva:Reserva):Observable<Reserva>{
    return this.httpClient.put<Reserva>(""+reserva.id,reserva);
  }
}
