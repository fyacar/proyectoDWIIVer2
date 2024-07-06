import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){

  }

  submit(usuario:HTMLInputElement, password: HTMLInputElement):void{
    console.log("Usuario:", usuario.value);
    console.log("Password:", password.value);
    this.router.navigateByUrl("/dashboard")
  }


  irCrearUsuario(){
    this.router.navigateByUrl("/crearusuario")
  }

}
