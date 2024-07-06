import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, password: string){
    sessionStorage.setItem("isLogged","true");    
  }

  logout():void{
    sessionStorage.clear()
  }

  isLogged():boolean{
    //el operador !! devuelve true si lo que está al lado es no nulo, de lo contrario devuelve false
    return !!sessionStorage.getItem("isLogged")
  }

}
