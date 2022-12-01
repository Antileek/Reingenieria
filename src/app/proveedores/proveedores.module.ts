import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores.component';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { ListadoProveedorComponent } from './listado-proveedor/listado-proveedor.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { DetallesProveedorComponent } from './detalles-proveedor/detalles-proveedor.component';
import { ProveedoresRoutingModule } from './proveedor-routing.module';

@NgModule({
  declarations: [
    ProveedoresComponent,
    AgregarProveedorComponent,
    ListadoProveedorComponent,
    DetallesProveedorComponent
  ],
  imports: [CommonModule, ProveedoresRoutingModule, PrimengModule, FormsModule],
})
export class ProveedoresModule { }
