import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../Reserva-service/reserva.service';
import { Reserva } from '../reserva';


enum FormType{
  Crear = 0,
  Actualizar = 1
}



@Component({
  selector: 'app-reserva-detalles',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reserva-detalles.component.html',
  styleUrl: './reserva-detalles.component.css'
})
export class ReservaDetallesComponent {
  reservaId: string|null = "";
  reservaForm! : FormGroup
  formType! : FormType;
  formTitulo! : string

  constructor(private arouter:ActivatedRoute, private reservaService: ReservaService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.reservaId = this.arouter.snapshot.paramMap.get("id");
    this.reservaForm = this.formulario();
    if(this.reservaId !== "crear"){
      this.formTitulo = "Editar Reserva"
      this.formType = FormType.Actualizar
      this.cargarReserva(Number(this.reservaId))
    } else{
      this.formTitulo = "Nueva Reserva"
      this.formType = FormType.Crear
    }
  }

  formulario():FormGroup{
    return new FormGroup({
      id: new FormControl(""),
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
  cargarReserva(reservaId:number):void{
    this.reservaService.getReservaById(reservaId).subscribe((data)=>{
      const{ id,fecha_reserva,idusuario,idproducto,cantPerson,cantDias,subTotal, fecha_registro,idestado} = data
      this.reservaForm.setValue({ id,fecha_reserva,idusuario,idproducto,cantPerson,cantDias,subTotal, fecha_registro,idestado})
    })
  }

  guardarReserva():void{
    if(this.formType === FormType.Crear){
      this.registrarReserva(this.reservaForm.value)
    }else{
      const reservaValue = {...this.reservaForm.value, id: Number(this.reservaId) }
      this.actualizarReserva(reservaValue)
    }
  }

  registrarReserva(reserva: Reserva){
    this.reservaService.createReserva(reserva)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  actualizarReserva(reserva: Reserva){
    this.reservaService.updateReserva(reserva)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
