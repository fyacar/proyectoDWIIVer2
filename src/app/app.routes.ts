import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ReservaComponent } from './reserva/reserva.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: "inicio", component: InicioComponent},
    { path: "login", component: LoginComponent},
    { path: "servicios", component: ServiciosComponent},
    { path: "detalle", component: DetalleComponent},
    { path: "reserva", component: ReservaComponent},
    { path: "dashboard", component: DashboardComponent},
];
