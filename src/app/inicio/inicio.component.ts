import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private router: Router,    
  ){ }


  irServicios():void{    
    this.router.navigate(["servicios"])
  }


}


