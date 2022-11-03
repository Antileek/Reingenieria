import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  apiUrl: string = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  productos(): any {
    return this.http.get(this.apiUrl);
  }
}
