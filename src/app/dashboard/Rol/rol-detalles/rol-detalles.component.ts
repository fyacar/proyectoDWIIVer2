import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Rol } from '../rol';
import { RolesService } from '../roles.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rol-detalles',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './rol-detalles.component.html',
  styleUrl: './rol-detalles.component.css'
})
export class RolDetallesComponent {

  rolId:string|null = ""
  descripcion: string = ""
  isActivo: boolean = true  
  
  constructor(private arouter:ActivatedRoute, private rolService: RolesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.rolId = this.arouter.snapshot.paramMap.get("id");
    this.rolService.getRolById(Number(this.rolId)).subscribe((data)=>
    this.descripcion = data.descripcion);  
    this.rolService.getRolById(Number(this.rolId)).subscribe((data)=>
      this.isActivo = data.isActivo);  
 
  }

  actualizarRol(activo: boolean, descripcion: HTMLInputElement){
    const rol: Rol = {  
      idrol:Number(this.rolId),    
      descripcion: descripcion.value,
      isActivo: activo
    };
    this.rolService.updateRol(rol).subscribe((data)=>
    console.log(data))
    this.router.navigateByUrl("/dashboard/roles")
  }

}
