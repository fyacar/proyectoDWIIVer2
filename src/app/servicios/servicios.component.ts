import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MaterialModule,FormsModule ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  constructor(private router: Router,
    private route:ActivatedRoute
  ){ }
 
  selectedValue: string ="";
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  irInicio():void{
    this.router.navigate(["inicio"])
  }
  irServicios():void{
    console.log("método IrCurso")
    this.router.navigate(["servicios"])

  }
  irReserva():void{
    this.router.navigate(["reserva"])
  }
  irDashboard():void{
    this.router.navigate(["dashboard"])
  }



}

interface Food {
  value: string;
  viewValue: string;
}