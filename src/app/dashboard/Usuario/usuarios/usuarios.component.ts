import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Usuario } from '../usuario';
import { UsuarioService } from '../Usuario-Service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  displayedColumns: string[] = ['id', 'nombres', 'apellidos','dni','idSexo','telefono','correo',
    'usuario',"password","fecha_nacimiento","fecha_registro", "idRol", "editar"];

    usuarios: Usuario[] = [
      {
          id: 1,
          nombres: 'Juan',
          apellidos: 'Pérez',
          dni: '12345678',
          idSexo: 1,
          telefono: '123456789',
          correo: 'juan.perez@example.com',
          usuario: 'juanp',
          password: 'password123',
          fecha_nacimiento: new Date('1990-05-15'),
          fecha_registro: new Date('2023-01-10'),
          idRol: 2
      },
      {
          id: 2,
          nombres: 'María',
          apellidos: 'González',
          dni: '87654321',
          idSexo: 2,
          telefono: '987654321',
          correo: 'maria.gonzalez@example.com',
          usuario: 'mariag',
          password: 'securePass!',
          fecha_nacimiento: new Date('1985-09-23'),
          fecha_registro: new Date('2022-11-05'),
          idRol: 1
      },
      {
          id: 3,
          nombres: 'Carlos',
          apellidos: 'Ramírez',
          dni: '11223344',
          idSexo: 1,
          telefono: '1122334455',
          correo: 'carlos.ramirez@example.com',
          usuario: 'carlosr',
          password: 'passCarlos@89',
          fecha_nacimiento: new Date('1978-12-30'),
          fecha_registro: new Date('2021-07-15'),
          idRol: 3
      },
      {
          id: 4,
          nombres: 'Ana',
          apellidos: 'Martinez',
          dni: '33445566',
          idSexo: 2,
          telefono: '9988776655',
          correo: 'ana.lopez@example.com',
          usuario: 'anam',
          password: 'AnaSecurePass45',
          fecha_nacimiento: new Date('1992-03-12'),
          fecha_registro: new Date('2020-05-20'),
          idRol: 2
      },
      {
          id: 5,
          nombres: 'Miguel',
          apellidos: 'Fernández',
          dni: '55667788',
          idSexo: 1,
          telefono: '6677889900',
          correo: 'miguel.fernandez@example.com',
          usuario: 'miguelf',
          password: 'miguel#2020',
          fecha_nacimiento: new Date('1988-08-18'),
          fecha_registro: new Date('2019-10-25'),
          idRol: 4
      }
  ];

    /*usuarios: Usuario[] = []*/

    constructor(private usuarioService: UsuarioService, private route:ActivatedRoute,
      private router:Router){}
  
    /*
      ngOnInit(): void {
        this.productosService.getAllProductos().subscribe((data) =>{
          console.log(data);
          this.productos =data;
        } );
      }  
  */ 
  
      IrEditarUsuario(usuarioId: number):void{
        this.router.navigate([usuarioId],{relativeTo: this.route});
      }
      IrCrearUsuario():void{
        this.router.navigate(["crear"],{relativeTo: this.route});
      }
  
  

}
