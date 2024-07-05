import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Empresa } from '../empresa';
import { EmpresaService } from '../Empresa-Service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {

  displayedColumns: string[] = ['id', 'nombres', 'descripcion','idCategoria','estrellas','likes','idCiudad','activo',"editar"];

  empresas: Empresa[] = [
    {
      id: 1, nombres: "Hotel La Estrella", descripcion: "Hotel de lujo con vista al mar",
      idCategoria: 2,estrellas: 5,likes: 1200, idCiudad: 1, isActivo: true
    },
    {
      id: 2, nombres: "Restaurante La Casona", descripcion: "Comida gourmet con ambiente histórico",
      idCategoria: 1, estrellas: 4, likes: 850, idCiudad: 3, isActivo: true
    },
    {
      id: 3, nombres: "Bar La Esquina", descripcion: "Ambiente moderno con música en vivo",
      idCategoria: 3, estrellas: 3, likes: 500, idCiudad: 2, isActivo: true
    },
    {
      id: 4, nombres: "Cafetería El Aroma", descripcion: "Variedad de café y postres artesanales",
      idCategoria: 4, estrellas: 4, likes: 700, idCiudad: 4, isActivo: true
    },
    {
      id: 5, nombres: "Hostal El Viajero", descripcion: "Alojamiento económico para mochileros",
      idCategoria: 5,estrellas: 3,likes: 300, idCiudad: 1, isActivo: false
    }
  ];

  /*empresas: Empresa[] = []*/

  constructor(private empresasService: EmpresaService, private route:ActivatedRoute,
    private router:Router){}

  /*
    ngOnInit(): void {
      this.empresasService.getAllEmpresas().subscribe((data) =>{
        console.log(data);
        this.empresas =data;
      } );
    }  

  */

    IrEditarEmpresa(empresaId: number):void{
      this.router.navigate([empresaId],{relativeTo: this.route});
    }
    IrCrearEmpresa():void{
      this.router.navigate(["crear"],{relativeTo: this.route});
    }

}
