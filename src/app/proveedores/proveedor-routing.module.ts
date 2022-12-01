import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { DetallesProveedorComponent } from './detalles-proveedor/detalles-proveedor.component';
import { ListadoProveedorComponent } from './listado-proveedor/listado-proveedor.component';
import { ProveedoresComponent } from './proveedores.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresComponent,
    children: [
      {
        path: 'listado',
        component: ListadoProveedorComponent,
      },
      {
        path: 'listado/:id',
        component: DetallesProveedorComponent,
      },
      {
        path: 'agregar',
        component: AgregarProveedorComponent,
      },
      {
        path: 'editar/:id',
        component: AgregarProveedorComponent,
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
export class ProveedoresRoutingModule {}
