import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () => 
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'proveedores',
    loadChildren: () => 
      import('./proveedores/proveedores.module').then((m) => m.ProveedoresModule),
  },
  {
    path: '**',
    redirectTo: 'productos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
