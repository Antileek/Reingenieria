import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng/primeng.module';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { PrecioProductoComponent } from './precio-producto/precio-producto.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductosComponent,
    ListadoProductosComponent,
    DetallesProductoComponent,
    AgregarProductoComponent,
    PrecioProductoComponent,
  ],
  imports: [CommonModule, ProductosRoutingModule, PrimengModule, FormsModule, RouterModule],
})
export class ProductosModule {}
