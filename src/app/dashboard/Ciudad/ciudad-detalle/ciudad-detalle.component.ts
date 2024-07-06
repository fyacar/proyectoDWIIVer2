import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CiudadService } from '../Ciudad-Service/ciudad.service';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Ciudad } from '../ciudad';


enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-ciudad-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './ciudad-detalle.component.html',
  styleUrl: './ciudad-detalle.component.css'
})
export class CiudadDetalleComponent {

    ciudadId: string|null = "";
    ciudadForm! : FormGroup
    formType! : FormType;
    formTitulo! : string

    constructor(private router:ActivatedRoute, private ciudadService: CiudadService){}

    ngOnInit(): void {
      this.ciudadId = this.router.snapshot.paramMap.get("id");
      this.ciudadForm = this.formulario()
      if(this.ciudadId !== "crear"){
        this.formTitulo = "Editar Ciudad"
        this.formType = FormType.Actualizar
        this.cargarCiudad(Number(this.ciudadId))
      }else{
        this.formTitulo = "Nueva Ciudad"
        this.formType = FormType.Crear
      }
    }

    formulario():FormGroup{
      return new FormGroup({
        /*id: new FormControl(""),*/
        nombres: new FormControl("")        
      })
    }

    cargarCiudad(ciudaId:number):void{
      this.ciudadService.getCiudadById(ciudaId).subscribe((data)=>{
        const{ /*id,*/nombres} = data
        this.ciudadForm.setValue({/*id,*/nombres})
      })
    }

    guardarCiudad():void{
      if(this.formType === FormType.Crear){
        this.registrarCiudad(this.ciudadForm.value)
      }else{
        const ciudadValue = {...this.ciudadForm.value, id: Number(this.ciudadId)}
        this.actualizarCiudad(ciudadValue)
      }
    }
    registrarCiudad(ciudad: Ciudad){
      this.ciudadService.createCiudad(ciudad)
      .subscribe(
        (data) => {
          console.log(data);
        }
      )
    }
    actualizarCiudad(ciudad: Ciudad){
      this.ciudadService.updateCiudad(ciudad)
      .subscribe(
        (data) => {
          console.log(data);
        }
      )
    }

}

