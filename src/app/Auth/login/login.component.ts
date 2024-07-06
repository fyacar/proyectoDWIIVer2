import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private authService : AuthService){

  }

  submit(usuario:HTMLInputElement, password: HTMLInputElement):void{
    if (usuario.value =="admin" && password.value =="123456"){
      this.authService.login(usuario.value,password.value);
      this.router.navigateByUrl("/servicios")
    }
    else{
      this.router.navigateByUrl("/login")
    }
    console.log("Usuario:", usuario.value);
    console.log("Password:", password.value);
    
  }


  irCrearUsuario(){
    this.router.navigateByUrl("/crearusuario")
  }

}
