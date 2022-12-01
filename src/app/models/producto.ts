export interface Producto {
  ID?: number;
  IdProveedor: string;
  FechaDeIngreso?: Date;
  FechaDeCaducidad : Date;
  Cantidad: number;
  PesoUnitario: number;
  CostoUnitario: number;
  PrecioDeVenta: number;
  Nombre: string;
  Descripcion: string;
  EstadoProducto: number;
}