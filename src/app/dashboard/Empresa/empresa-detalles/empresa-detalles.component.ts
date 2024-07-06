import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../../Rol/roles.service';
import { Empresa } from '../empresa';
import { EmpresaService } from '../Empresa-Service/empresa.service';

enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-empresa-detalles',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './empresa-detalles.component.html',
  styleUrl: './empresa-detalles.component.css'
})
export class EmpresaDetallesComponent {

  empresaId: string|null = "";
  empresaForm! : FormGroup
  formType! : FormType;
  formTitulo! : string

  constructor(private arouter:ActivatedRoute, private empresaService: EmpresaService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.empresaId = this.arouter.snapshot.paramMap.get("id");
    this.empresaForm = this.formulario();
    if(this.empresaId !== "crear"){
      this.formTitulo = "Editar Empresa"
      this.formType = FormType.Actualizar
      this.cargarEmpresa(Number(this.empresaId))
    } else{
      this.formTitulo = "Nueva Empresa"
      this.formType = FormType.Crear
    }
  }


  formulario():FormGroup{
    return new FormGroup({
      /*id: new FormControl(""),*/      
      nombres: new FormControl("") ,
      descripcion: new FormControl("") ,  
      idCategoria: new FormControl("") ,  
      estrellas: new FormControl("") , 
      likes: new FormControl("") ,  
      idCiudad: new FormControl("") ,  
      isActivo: new FormControl(false) ,
    })
  }

  cargarEmpresa(empresaId:number):void{
    this.empresaService.getEmpresaById(empresaId).subscribe((data)=>{
      const{ /*id,*/nombres,descripcion,idCategoria,estrellas,likes,idCiudad,isActivo} = data
      this.empresaForm.setValue({ /*id,*/nombres,descripcion,idCategoria,estrellas,likes,idCiudad,isActivo})
    })
  }

  guardarEmpresa():void{
    if(this.formType === FormType.Crear){
      this.registrarEmpresa(this.empresaForm.value)
    }else{
      const empresaValue = {...this.empresaForm.value, id: Number(this.empresaId) }
      this.actualizarEmpresa(empresaValue)
    }
  }

  registrarEmpresa(empresa: Empresa){
    this.empresaService.createEmpresa(empresa)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  actualizarEmpresa(empresa: Empresa){
    this.empresaService.updateEmpresa(empresa)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }




}
