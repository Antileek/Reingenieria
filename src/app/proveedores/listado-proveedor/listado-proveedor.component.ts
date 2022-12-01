import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proovedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-listado-proveedor',
  templateUrl: './listado-proveedor.component.html',
  styleUrls: ['./listado-proveedor.component.css']
})
export class ListadoProveedorComponent implements OnInit {
  proveedores : Proveedor[] = [];

  constructor(private ps: ProveedoresService) { }

  ngOnInit(): void {
    this.ps.proveedores().subscribe(proveedores => this.proveedores = proveedores);
  }

}
