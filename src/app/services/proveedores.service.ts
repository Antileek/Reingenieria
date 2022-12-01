import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from 'src/app/models/proovedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  apiUrl: string = 'http://localhost:3000/api/proveedores';

  constructor(private http: HttpClient) {}

  proveedores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  agregarProveedor(proveedor: Proveedor) {
    return this.http.post(this.apiUrl, proveedor);
  }
}
