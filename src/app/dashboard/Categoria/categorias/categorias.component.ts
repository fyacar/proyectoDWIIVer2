import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Categoria } from '../categoria';
import { RolesService } from '../../Rol/roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../Categoria-Service/categoria.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  displayedColumns: string[] = ['id', "nombres","descripcion", 'activo','editar'];

    categorias: Categoria[] = [
    { id: 1, nombres: "Restaurantes", descripcion: "Locales de comida y bebida", isActivo: true },
    { id: 2, nombres: "Hoteles", descripcion: "Alojamientos temporales para turistas", isActivo: true },
    { id: 3, nombres: "Bares", descripcion: "Establecimientos para bebidas alcohólicas", isActivo: true },
    { id: 4, nombres: "Cafeterías", descripcion: "Locales de café y snacks", isActivo: true },
    { id: 5, nombres: "Hostales", descripcion: "Alojamientos económicos para viajeros", isActivo: true }
  ];

    /*categorias: Categoria[] = []*/

    constructor(private categoriaService: CategoriaService, private route:ActivatedRoute,
      private router:Router){}

    /*
    ngOnInit(): void {
      this.categoriaService.getAllCategorias().subscribe((data) =>{
        console.log(data);
        this.categorias =data;
      } );
    }  
  */
    IrEditarCategoria(categoriaId: number):void{
      this.router.navigate([categoriaId],{relativeTo: this.route});
    }
    IrCrearCategoria():void{
      this.router.navigate(["crear"],{relativeTo: this.route});
    }



}
