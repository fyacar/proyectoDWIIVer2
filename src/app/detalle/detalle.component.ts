import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../dashboard/Producto/Producto-Service/producto.service';
import { Producto } from '../dashboard/Producto/producto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reserva } from '../dashboard/Reserva/reserva';
import { ReservaService } from '../dashboard/Reserva/Reserva-service/reserva.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MaterialModule, FormsModule,ReactiveFormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  productoId: string|null = "";
  reservaForm! : FormGroup

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
    private route:ActivatedRoute, private productoService : ProductoService, private reservaService:ReservaService
  ){ }

  
  ngOnInit(): void {
    this.productoId = this.route.snapshot.paramMap.get("id");
      this.productoService.getProductoById(Number(this.productoId)).subscribe((data) =>{
        console.log(data);
        this.producto =data;
      } );
      this.reservaForm = this.formulario();
    }   

    formulario():FormGroup{
      return new FormGroup({
        /*
        id: new FormControl(""), */
        fecha_reserva: new FormControl("") ,
        idusuario: new FormControl("") ,  
        idproducto: new FormControl("") ,  
        cantPerson: new FormControl("") , 
        cantDias: new FormControl("") ,  
        subTotal: new FormControl("") , 
        fecha_registro: new FormControl("") ,   
        idestado: new FormControl("")
      })
    }

    guardarReserva():void{      
        this.registrarReserva(this.reservaForm.value)      
    }

    registrarReserva(reserva: Reserva){
      this.reservaService.createReserva(reserva)
      .subscribe(
        (data) => {
          console.log(data);
        }
      )
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

