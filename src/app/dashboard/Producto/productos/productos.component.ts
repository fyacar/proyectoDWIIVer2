import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Producto } from '../producto';
import { ProductoService } from '../Producto-Service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  displayedColumns: string[] = ['id', 'nombres', 'descripcion','idEmpresa','estrellas','likes','preciobase',
    'precioincremento',"stock","activo","editar"];
  
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
          nombres: 'Excursión a la Montaña',
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
      }
  ];

  /*productos: Producto[] = []*/

  constructor(private productosService: ProductoService, private route:ActivatedRoute,
    private router:Router){}

  /*
    ngOnInit(): void {
      this.productosService.getAllProductos().subscribe((data) =>{
        console.log(data);
        this.productos =data;
      } );
    }  
*/ 

    IrEditarProducto(productoId: number):void{
      this.router.navigate([productoId],{relativeTo: this.route});
    }
    IrCrearProducto():void{
      this.router.navigate(["crear"],{relativeTo: this.route});
    }





}
