import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService,private router : Router) {}

  ngOnInit(): void {

    this.productosService
      .productos()
      .subscribe((productos: Producto[]) => (this.productos = productos));

      console.log(this.productos)
  }

  estadoProducto(estadoProducto: number) {
    if(estadoProducto === 1) return 'Bueno';
    if(estadoProducto === 0.8) return 'Detalles Menores';
    if(estadoProducto === 0.4) return 'Detalles Mayores';
    if(estadoProducto === 0) return 'Perdida';

    return;
  }

  public EditarProducto(id: number)
  {
    this.router.navigate(['/editar/'+id])
  }
  public PrecioProducto(id: number)
  {
    this.router.navigate(['/precio/'+id])
  }

  public eliminarProducto(id: number) {
    this.productosService.eliminarProducto(id).subscribe(console.log);
    this.productosService
      .productos()
      .subscribe((productos: Producto[]) => (this.productos = productos));

      console.log(this.productos)
  }
}
