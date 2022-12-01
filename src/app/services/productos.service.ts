import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  apiUrl: string = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  productos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  producto(id: string | number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/${id}`);
  }

  agregarProducto(producto: Producto) {
    return this.http.post(this.apiUrl, producto);
  }

  eliminarProducto(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
