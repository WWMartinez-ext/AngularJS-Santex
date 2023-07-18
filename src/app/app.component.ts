import { Component } from '@angular/core';

interface List {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Items: List[] = [
    { nombre: 'Mouse', costo: '$3.200' },
    { nombre: 'Teclado', costo: '$5.000' },
    { nombre: 'Auriculares', costo: '$6.300' },
    { nombre: 'Notebook', costo: '$235.000' },
    { nombre: 'MousePad', costo: '$2.700' },
    { nombre: 'Service', costo: '$6.000' }
  ];

  showList = false;

  toggleList() {
    this.showList = !this.showList;
  }

  title = 'appAngular-SantexEjerAngular';

}
