import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Proveedor } from 'src/app/models/proovedor';
import { ProductosService } from 'src/app/services/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],
})
export class AgregarProductoComponent implements OnInit {

  producto: Producto = {
    IdProveedor: '',
    FechaDeCaducidad: new Date(),
    Cantidad: 0,
    PesoUnitario: 0,
    CostoUnitario: 0,
    PrecioDeVenta: 0,
    Nombre: '',
    Descripcion: '',
    EstadoProducto: 0,
  }

  proveedores: Proveedor[] = [];
  constructor(private ps:ProveedoresService, private pro: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.ps.proveedores().subscribe(proveedores => this.proveedores = proveedores);
  }

  agregar() {
    if(this.producto.IdProveedor.length === 0) return;
    if(this.producto.FechaDeCaducidad === null) return;
    if(this.producto.Cantidad === 0) return;
    if(this.producto.PesoUnitario === 0) return;
    if(this.producto.CostoUnitario === 0) return;
    if(this.producto.PrecioDeVenta === 0) return;
    if(this.producto.Nombre.trim().length === 0) return;
    if(this.producto.Descripcion.trim().length === 0) return;

    this.pro.agregarProducto(this.producto).subscribe(console.log);
    this.router.navigate(['../listado']);


  }
}
