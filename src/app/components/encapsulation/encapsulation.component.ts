import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EncapsulationComponent {

}
