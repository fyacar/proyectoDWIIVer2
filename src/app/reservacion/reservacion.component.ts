import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../dashboard/Producto/Producto-Service/producto.service';
import { Producto } from '../dashboard/Producto/producto';

@Component({
  selector: 'app-reservacion',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './reservacion.component.html',
  styleUrl: './reservacion.component.css'
})
export class ReservacionComponent {

  productoId: string|null = "";
  
  producto:Producto = {
    id: 1,
    nombres: 'Habitación Doble',
    descripcion: 'Habitación con dos camas individuales y baño privado.',
    idEmpresa: 101,
    estrellas: 4,
    likes: 150,
    preciobase: 80,
    precioincremento: 10,
    stock: 5,
    isActivo: true}

  constructor(private router: Router,
    private route:ActivatedRoute, private productoService : ProductoService
  ){ }

  ngOnInit(): void {
    this.productoId = this.route.snapshot.paramMap.get("id");
      this.productoService.getProductoById(Number(this.productoId)).subscribe((data) =>{
        console.log(data);
        this.producto =data;
      } );
    }   


  irInicio():void{
    this.router.navigate(["inicio"])
  }
  irServicios():void{    
    this.router.navigate(["servicios"])
  }
  irReserva():void{
    this.router.navigate(["reserva"])
  }
  irDashboard():void{
    this.router.navigate(["dashboard"])
  }

}
