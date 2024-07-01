import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

}
