import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../dashboard/Usuario/Usuario-Service/usuario.service';
import { Usuario } from '../dashboard/Usuario/usuario';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  usuarioId: string|null = "";
  usuarioForm! : FormGroup
  formType! : FormType;
  formTitulo! : string

  constructor(private arouter:ActivatedRoute, private usuarioService: UsuarioService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.usuarioId ="crear";
    this.usuarioForm = this.formulario();
    if(this.usuarioId !== "crear"){
      this.formTitulo = "Editar Usuario"
      this.formType = FormType.Actualizar
      this.cargarUsuario(Number(this.usuarioId))
    } else{
      this.formTitulo = "Nuevo Usuario"
      this.formType = FormType.Crear
    }
  }

  formulario():FormGroup{
    return new FormGroup({
      
      /*id: new FormControl(""),*/
      nombres: new FormControl("") ,
      apellidos: new FormControl("") ,  
      dni: new FormControl("") ,  
      idSexo: new FormControl("") , 
      telefono: new FormControl("") ,  
      correo: new FormControl("") , 
      usuario: new FormControl("") ,   
      password: new FormControl("") ,       
      fecha_nacimiento: new FormControl(""), 
      fecha_registro: new FormControl(""), 
      idRol: new FormControl(""), 
    })
  }
  cargarUsuario(usuarioId:number):void{
    this.usuarioService.getUsuarioById(usuarioId).subscribe((data)=>{
      const{ /*id,*/nombres,apellidos,dni,idSexo,telefono,correo, usuario,password,fecha_nacimiento,fecha_registro, idRol} = data
      this.usuarioForm.setValue({ /*id,*/nombres,apellidos,dni,idSexo,telefono,correo,usuario,password,fecha_nacimiento,fecha_registro, idRol})
    })
  }

  guardarUsuario():void{
    if(this.formType === FormType.Crear){      
      /* 
      const usuarioValue = {...this.usuarioForm.value, fecha_registro: new Date()}
      this.registrarUsuario(usuarioValue)
      */
      this.registrarUsuario(this.usuarioForm.value)
    }else{
      const usuarioValue = {...this.usuarioForm.value, id: Number(this.usuarioId) }
      this.actualizarUsuario(usuarioValue)
    }
  }

  registrarUsuario(usuario: Usuario){
    this.usuarioService.createUsuario(usuario)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  actualizarUsuario(usuario: Usuario){
    this.usuarioService.updateUsuario(usuario)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
