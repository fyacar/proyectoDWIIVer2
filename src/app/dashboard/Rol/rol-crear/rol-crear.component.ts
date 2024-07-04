import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RolesService } from '../roles.service';
import { Rol } from '../rol';


@Component({
  selector: 'app-rol-crear',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rol-crear.component.html',
  styleUrl: './rol-crear.component.css'
})
export class RolCrearComponent {


  constructor(private router: Router, private rolesService: RolesService){}
  
/* se tiene que agregar la url de la api en el servicio*/
  crear(activo: boolean, descripcion: HTMLInputElement):void{ 
    console.log("Activo:", activo);
    console.log("Descripción:", descripcion.value);    
    const rol: Rol = {  
      idrol:0,    
      descripcion: descripcion.value,
      isActivo: activo
    };
    this.rolesService.createRol(rol).subscribe((data)=>console.log(data))
    this.router.navigateByUrl("/dashboard/roles")
  }

}
