import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../Categoria-Service/categoria.service';
import { Categoria } from '../categoria';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-categoria-detalle',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './categoria-detalle.component.html',
  styleUrl: './categoria-detalle.component.css'
})
export class CategoriaDetalleComponent {
  cateogoriaId: string|null = "";
  CategoriaForm! : FormGroup
  formType! : FormType;
  formTitulo! : string

  constructor(private arouter:ActivatedRoute, private cateogiraService: CategoriaService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.cateogoriaId = this.arouter.snapshot.paramMap.get("id");
    this.CategoriaForm = this.formulario();
    if(this.cateogoriaId !== "crear"){
      this.formTitulo = "Editar Categoria"
      this.formType = FormType.Actualizar
      this.cargarCategoria(Number(this.cateogoriaId))
    } else{
      this.formTitulo = "Nueva Categoría"
      this.formType = FormType.Crear
    }
  }

  formulario():FormGroup{
    return new FormGroup({
      /*      id: new FormControl(""),*/      
      nombres : new FormControl(""),
      descripcion: new FormControl("") ,       
      isActivo: new FormControl(false) ,
    })
  }


  cargarCategoria(categoriaId:number):void{
    this.cateogiraService.getCategoriaById(categoriaId).subscribe((data)=>{
      const{ id,nombres,descripcion,isActivo} = data
      this.CategoriaForm.setValue({id,nombres,descripcion,isActivo})
    })
  }

  guardarCategoria():void{
    if(this.formType === FormType.Crear){
      this.registrarCategoria(this.CategoriaForm.value)
    }else{
      const cateogoriaValue = {...this.CategoriaForm.value, id: Number(this.cateogoriaId) }
      this.actualizarCategoria(cateogoriaValue)
    }
  }

  registrarCategoria(categoria: Categoria){
    this.cateogiraService.createCategoria(categoria)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  actualizarCategoria(cateogoria: Categoria){
    this.cateogiraService.updateCategoria(cateogoria)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }


}
