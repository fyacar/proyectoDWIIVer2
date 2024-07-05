import { Component } from '@angular/core';
import { Rol } from '../../Rol/rol';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Ciudad } from '../ciudad';
import { CiudadService } from '../Ciudad-Service/ciudad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ciudades',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './ciudades.component.html',
  styleUrl: './ciudades.component.css'
})
export class CiudadesComponent {

  displayedColumns: string[] = ['id', 'descripcion', "editar"];
  
  ciudades: Ciudad[] = [
    { id: 1, nombres: 'Lima' },
    { id: 2, nombres: 'Arequipa' },
    { id: 3, nombres: 'Cusco' },
    { id: 4, nombres: 'Trujillo' },
    { id: 5, nombres: 'Chiclayo' }
  ]
   /*ciudades: Ciudad[] = []*/

  constructor(private ciudadService : CiudadService, private route:ActivatedRoute, 
    private router:Router){}
  /*
  ngOnInit(): void {
    this.ciudadService.getAllCiudades().subscribe((data)=>{
      console.log(data);
      this.ciudades = data;
    });
    
  }
 */
    irCrearCiudad():void{
      this.router.navigate(["crear"],{relativeTo: this.route});
    }

    irEditarCiudad(ciudadId:number):void{
      this.router.navigate([ciudadId],{relativeTo: this.route});
    }

 
}
