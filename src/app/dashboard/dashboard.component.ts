import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    constructor(private router: Router,
      private route:ActivatedRoute){

      }

      irProductos():void{
        this.router.navigate(["productos"],{relativeTo: this.route})
      }
      irCiudades():void{
        this.router.navigate(["ciudades"],{relativeTo: this.route})
      }
      irEmpresas():void{
        this.router.navigate(["empresas"],{relativeTo: this.route})
      }
      irCategorias():void{
        this.router.navigate(["categorias"],{relativeTo: this.route})
      }
      irReserva():void{
        this.router.navigate(["reservas"],{relativeTo: this.route})
      }
      irRol():void{
        this.router.navigate(["roles"],{relativeTo: this.route})
      }
      irUsuario():void{
        this.router.navigate(["usuarios"],{relativeTo: this.route})
      }

}
