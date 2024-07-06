import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Rol } from '../rol';
import { RolesService } from '../roles.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-rol-detalles',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rol-detalles.component.html',
  styleUrl: './rol-detalles.component.css'
})
export class RolDetallesComponent {

  rolId: string|null = "";
  rolForm! : FormGroup
  formType! : FormType;
  formTitulo! : string
  
  constructor(private arouter:ActivatedRoute, private rolService: RolesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.rolId = this.arouter.snapshot.paramMap.get("id");
    this.rolForm = this.formulario();
    if(this.rolId !== "crear"){
      this.formTitulo = "Editar Rol"
      this.formType = FormType.Actualizar
      this.cargarRol(Number(this.rolId))
    } else{
      this.formTitulo = "Nuevo Rol"
      this.formType = FormType.Crear
    }
  }
 

  formulario():FormGroup{
    return new FormGroup({
      /*idrol: new FormControl(""),*/
      descripcion: new FormControl("") ,       
      isActivo: new FormControl(false) ,
    })
  }


  cargarRol(rolId:number):void{
    this.rolService.getRolById(rolId).subscribe((data)=>{
      const{ /*idrol,*/descripcion,isActivo} = data
      this.rolForm.setValue({/*idrol,*/descripcion,isActivo})
    })
  }

  guardarRol():void{
    if(this.formType === FormType.Crear){
      this.registrarRol(this.rolForm.value)
    }else{
      const rolValue = {...this.rolForm.value, idrol: Number(this.rolId) }
      this.actualizarRol(rolValue)
    }
  }

  registrarRol(rol: Rol){
    this.rolService.createRol(rol)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  actualizarRol(rol: Rol){
    this.rolService.updateRol(rol)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
