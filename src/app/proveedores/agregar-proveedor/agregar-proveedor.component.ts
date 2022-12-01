import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proovedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {

  proveedor: Proveedor = {
    Nombre: '',
    NumeroContacto: '',
  }

  constructor(private ps: ProveedoresService) { }

  ngOnInit(): void {
  }
  
  agregar() {
    if(this.proveedor.Nombre.trim().length === 0) return;
    if(this.proveedor.NumeroContacto.trim().length === 0) return;

    console.log(this.proveedor);

    this.ps.agregarProveedor(this.proveedor).subscribe(console.log);
  }
}
