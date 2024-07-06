import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../Producto-Service/producto.service';
import { Producto } from '../producto';


enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-producto-detalles',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css'
})
export class ProductoDetallesComponent {

  productoId: string|null = "";
  productoForm! : FormGroup
  formType! : FormType;
  formTitulo! : string

  constructor(private arouter:ActivatedRoute, private productoService: ProductoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.productoId = this.arouter.snapshot.paramMap.get("id");
    this.productoForm = this.formulario();
    if(this.productoId !== "crear"){
      this.formTitulo = "Editar Producto"
      this.formType = FormType.Actualizar
      this.cargarProducto(Number(this.productoId))
    } else{
      this.formTitulo = "Nuevo Producto"
      this.formType = FormType.Crear
    }
  }

  formulario():FormGroup{
    return new FormGroup({
      /*
      id: new FormControl(""),*/
      nombres: new FormControl("") ,
      descripcion: new FormControl("") ,  
      idEmpresa: new FormControl("") ,  
      estrellas: new FormControl("") , 
      likes: new FormControl("") ,  
      preciobase: new FormControl("") , 
      precioincremento: new FormControl("") ,   
      stock: new FormControl("") ,       
      isActivo: new FormControl(false) 
    })
  }

  cargarProducto(productoId:number):void{
    this.productoService.getProductoById(productoId).subscribe((data)=>{
      const{ /*id,*/nombres,descripcion,idEmpresa,estrellas,likes,preciobase, precioincremento,stock,isActivo} = data
      this.productoForm.setValue({ /*id,*/nombres,descripcion,idEmpresa,estrellas,likes,preciobase, precioincremento,stock,isActivo})
    })
  }

  guardarProducto():void{
    if(this.formType === FormType.Crear){
      this.registrarProducto(this.productoForm.value)
    }else{
      const productoValue = {...this.productoForm.value, id: Number(this.productoId) }
      this.actualizarProducto(productoValue)
    }
  }

  registrarProducto(producto: Producto){
    this.productoService.createProducto(producto)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  actualizarProducto(producto: Producto){
    this.productoService.updateProducto(producto)
    .subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
