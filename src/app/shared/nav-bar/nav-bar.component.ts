import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Productos',
        icon: 'pi pi-box',
        items: [
          {
            label: 'Listado',
            icon: 'pi pi-list',
            routerLink: '/productos/listado',
          },
          {
            label: 'Agregar',
            icon: 'pi pi-user-plus',
            routerLink: 'productos/agregar',
          },
        ],
      },
    ];
  }
}
