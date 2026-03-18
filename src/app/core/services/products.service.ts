import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly httpClient = inject(HttpClient);

  getallproducts(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/api/v1/products?limit=10`);
  }

  getoneproduct(prId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/api/v1/products/${prId}`);
  }
}
