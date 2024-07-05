import { Component } from '@angular/core';
import { RolesService } from '../roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from '../rol';
import { MaterialModule } from '../../../angular-material/material/material.module';


enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  displayedColumns: string[] = ['idrol', 'descripcion', 'activo','editar'];
  
  roles: Rol[] = [
    { idrol: 1, descripcion: 'Administrador', isActivo: true },
    { idrol: 2, descripcion: 'Usuario', isActivo: true },
    { idrol: 3, descripcion: 'Supervisor', isActivo: false },
    { idrol: 4, descripcion: 'Gerente', isActivo: true },
    { idrol: 5, descripcion: 'Invitado', isActivo: false }
  ]

  /*roles: Rol[] = []*/

  constructor(private rolesService: RolesService, private route:ActivatedRoute,
    private router:Router){}


/*
    ngOnInit(): void {
      this.rolesService.getAllRoles().subscribe((data) =>{
        console.log(data);
        this.roles =data;
      } );
    }  



  */
    IrEditarRol(rolId: number):void{
      this.router.navigate([rolId],{relativeTo: this.route});
    }
    IrCrearRol():void{
      this.router.navigate(["crear"],{relativeTo: this.route});
    }
}
