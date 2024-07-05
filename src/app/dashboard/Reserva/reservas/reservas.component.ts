import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';
import { Reserva } from '../reserva';
import { ReservaService } from '../Reserva-service/reserva.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {

  displayedColumns: string[] = ['id', 'fecha_reserva', 'idusuario','idproducto','cantPerson','cantDias','subTotal',
    'fecha_registro',"idestado","editar"];


    reservas: Reserva[] = [
      {
          id: 1,
          fecha_reserva: new Date('2023-07-01'),
          idusuario: 101,
          idproducto: 501,
          cantPerson: 2,
          cantDias: 3,
          subTotal: 450.00,
          fecha_registro: new Date('2023-06-25'),
          idestado: 1
      },
      {
          id: 2,
          fecha_reserva: new Date('2023-08-10'),
          idusuario: 102,
          idproducto: 502,
          cantPerson: 4,
          cantDias: 5,
          subTotal: 1200.00,
          fecha_registro: new Date('2023-08-01'),
          idestado: 1
      },
      {
          id: 3,
          fecha_reserva: new Date('2023-09-15'),
          idusuario: 103,
          idproducto: 503,
          cantPerson: 1,
          cantDias: 2,
          subTotal: 300.00,
          fecha_registro: new Date('2023-09-05'),
          idestado: 2
      },
      {
          id: 4,
          fecha_reserva: new Date('2023-10-20'),
          idusuario: 104,
          idproducto: 504,
          cantPerson: 3,
          cantDias: 4,
          subTotal: 900.00,
          fecha_registro: new Date('2023-10-10'),
          idestado: 1
      },
      {
          id: 5,
          fecha_reserva: new Date('2023-11-25'),
          idusuario: 105,
          idproducto: 505,
          cantPerson: 2,
          cantDias: 7,
          subTotal: 2100.00,
          fecha_registro: new Date('2023-11-15'),
          idestado: 3
      }
  ];

   /*usuarios: Usuario[] = []*/

   constructor(private reservaService: ReservaService, private route:ActivatedRoute,
    private router:Router){}

  /*
    ngOnInit(): void {
      this.reservaService.getAllReservas().subscribe((data) =>{
        console.log(data);
        this.reservas =data;
      } );
    }  
*/

    IrEditarReserva(reservaId: number):void{
      this.router.navigate([reservaId],{relativeTo: this.route});
    }
    IrCrearReserva():void{
      this.router.navigate(["crear"],{relativeTo: this.route});
    }






}
