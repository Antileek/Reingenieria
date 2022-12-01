import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { max, switchMap } from 'rxjs/operators';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-precio-producto',
  templateUrl: './precio-producto.component.html',
  styleUrls: ['./precio-producto.component.css']
})
export class PrecioProductoComponent implements OnInit {

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
  diasCaducar: any;

  getDiffDays(sDate: Date, eDate : Date) {
    var startDate = new Date(sDate);
    var endDate = new Date(eDate);
  
    var Time = endDate.getTime() - startDate.getTime();
    return Time / (1000 * 3600 * 24);
  }

  public descuentoCaducidad : number = 0;
  public descuentoMayoreo : number = 0;
  public precioRendimientos : number = 0;
  public precioPreferencialCliente : number = 0;


  private depreciacion = () => (this.producto.PrecioDeVenta- this.producto.CostoUnitario)/180 * this.getDiffDays(this.producto.FechaDeIngreso!,this.producto.FechaDeCaducidad)

  constructor(private ps: ProductosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.ps.producto(id))
    )
    .subscribe((resp) => {
      this.producto = resp[0];
      console.log(this.producto);
      this.descuentoCaducidad =   this.getDiffDays(new Date(),this.producto.FechaDeCaducidad) > 90 ? 0 : this.producto.PrecioDeVenta - this.depreciacion()
      this.descuentoMayoreo = this.producto.Cantidad > 11 ?  0.95 * this.producto.PrecioDeVenta : 0;
      this.diasCaducar = Math.round(this.getDiffDays(new Date(),this.producto.FechaDeCaducidad));
      this.precioRendimientos = (this.descuentoCaducidad && this.descuentoMayoreo) != 0 ? ( (this.descuentoCaducidad > this.descuentoMayoreo) ? this.descuentoCaducidad : this.descuentoMayoreo ) : 
      this.producto.EstadoProducto != 1 ?  this.producto.EstadoProducto * this.producto.PrecioDeVenta: this.producto.PrecioDeVenta;
      

      console.log(this.descuentoCaducidad);
      console.log(this.descuentoMayoreo);
      console.log(this.precioRendimientos);
      console.log(this.precioPreferencialCliente);
      console.log(this.diasCaducar);
    });
    
    


  }



}
