import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductosComponent } from './productos.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
    children: [
      {
        path: 'listado',
        component: ListadoProductosComponent,
      },
      {
        path: 'listado/:id',
        component: DetallesProductoComponent,
      },
      {
        path: 'agregar',
        component: AgregarProductoComponent,
      },
      {
        path: 'editar/:id',
        component: AgregarProductoComponent,
      },
      {
        path: '**',
        redirectTo: 'listado',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
