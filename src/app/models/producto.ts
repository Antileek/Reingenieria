export interface Producto {
  ID?: number;
  IdProveedor: number;
  Fecha : Date;
  Peso: number;
  Costo: number;
  Nombre: string;
  Descripcion: string;
  EstadoProducto: string;
}