import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ReservaComponent } from './reserva/reserva.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './dashboard/Categoria/categorias/categorias.component';
import { CiudadesComponent } from './dashboard/Ciudad/ciudades/ciudades.component';
import { EmpresasComponent } from './dashboard/Empresa/empresas/empresas.component';
import { ProductosComponent } from './dashboard/Producto/productos/productos.component';
import { ReservasComponent } from './dashboard/Reserva/reservas/reservas.component';
import { RolesComponent } from './dashboard/Rol/roles/roles.component';
import { UsuariosComponent } from './dashboard/Usuario/usuarios/usuarios.component';
import { RolDetallesComponent } from './dashboard/Rol/rol-detalles/rol-detalles.component';
import { CiudadDetalleComponent } from './dashboard/Ciudad/ciudad-detalle/ciudad-detalle.component';
import { CategoriaDetalleComponent } from './dashboard/Categoria/categoria-detalle/categoria-detalle.component';
import { EmpresaDetallesComponent } from './dashboard/Empresa/empresa-detalles/empresa-detalles.component';


export const routes: Routes = [
    { path: "inicio", component: InicioComponent},
    { path: "login", component: LoginComponent},
    { path: "servicios", component: ServiciosComponent},
    { path: "detalle", component: DetalleComponent},
    { path: "reserva", component: ReservaComponent},
    { path: "dashboard", component: DashboardComponent, children: [
        {path:"categorias", component: CategoriasComponent},
        {path:"categorias/:id", component: CategoriaDetalleComponent},
        {path:"ciudades", component: CiudadesComponent},
        {path:"ciudades/:id", component: CiudadDetalleComponent},
        {path:"empresas", component: EmpresasComponent},
        {path:"empresas/:id", component: EmpresaDetallesComponent},
        {path:"productos", component: ProductosComponent},
        {path:"reservas", component: ReservasComponent},
        {path:"roles", component: RolesComponent},
        {path:"roles/:id", component: RolDetallesComponent},
        {path:"usuarios", component: UsuariosComponent}
    ]},
];
