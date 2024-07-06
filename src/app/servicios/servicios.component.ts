import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Reserva } from '../dashboard/Reserva/reserva';
import { Producto } from '../dashboard/Producto/producto';
import { ProductoService } from '../dashboard/Producto/Producto-Service/producto.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MaterialModule,FormsModule ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  
  /*productos: Producto */
  productos: Producto[] = [
    {
        id: 1,
        nombres: 'Habitación Doble',
        descripcion: 'Habitación con dos camas individuales y baño privado.',
        idEmpresa: 101,
        estrellas: 4,
        likes: 150,
        preciobase: 80,
        precioincremento: 10,
        stock: 5,
        isActivo: true
    },
    {
        id: 2,
        nombres: 'Cena Gourmet',
        descripcion: 'Cena de tres platos en nuestro restaurante de lujo.',
        idEmpresa: 102,
        estrellas: 5,
        likes: 200,
        preciobase: 50,
        precioincremento: 5,
        stock: 10,
        isActivo: true
    },
    {
        id: 3,
        nombres: 'Trekking a Montaña',
        descripcion: 'Excursión guiada de un día a la montaña cercana.',
        idEmpresa: 103,
        estrellas: 4,
        likes: 120,
        preciobase: 40,
        precioincremento: 7,
        stock: 20,
        isActivo: true
    },
    {
        id: 4,
        nombres: 'Spa y Masajes',
        descripcion: 'Sesión de spa completa con masajes relajantes.',
        idEmpresa: 104,
        estrellas: 5,
        likes: 250,
        preciobase: 100,
        precioincremento: 15,
        stock: 8,
        isActivo: true
    },
    {
        id: 5,
        nombres: 'Tour por la Ciudad',
        descripcion: 'Tour guiado por los puntos turísticos de la ciudad.',
        idEmpresa: 105,
        estrellas: 4,
        likes: 180,
        preciobase: 30,
        precioincremento: 5,
        stock: 15,
        isActivo: true
    },
    {
      id:6,
      nombres: 'Tour por la Ciudad',
      descripcion: 'Tour guiado por los puntos turísticos de la ciudad.',
      idEmpresa: 105,
      estrellas: 4,
      likes: 180,
      preciobase: 30,
      precioincremento: 5,
      stock: 15,
      isActivo: true
  }
];


  constructor(private router: Router,
    private route:ActivatedRoute, private productoService : ProductoService
  ){ }

  ngOnInit(): void {
    this.productoService.getAllProductos().subscribe((data) =>{
      console.log(data);
      this.productos =data;
    } );
  }  
 
 


  irInicio():void{
    this.router.navigate(["inicio"])
  }
  irServicios():void{
    console.log("método IrCurso")
    this.router.navigate(["servicios"])

  }
  irReserva():void{
    this.router.navigate(["reserva"])
  }
  irDashboard():void{
    this.router.navigate(["dashboard"])
  }
  irServicioDetalle(reservaId:number):void{    
    this.router.navigate([reservaId],{relativeTo: this.route});
  }

}

