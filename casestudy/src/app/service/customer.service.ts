import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customers} from '../models/customers';
import {CustomerType} from '../models/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public API = 'http://localhost:3000/customers';
  public API1 = 'http://localhost:3000/customerTypeList';


  constructor(public httpClient: HttpClient) { }

  getAllCustomers(): Observable<Customers[]>{
    return this.httpClient.get<Customers[]>(this.API);
  }
  addNewCustomer(customer): Observable<Customers>{
    return this.httpClient.post<Customers>(this.API, customer);
  }
  getCustomerById(customerId): Observable<Customers>{
    return this.httpClient.get<Customers>(this.API + '/' + customerId);
  }
  deleteCustomer(customerId): Observable<Customers>{
    return this.httpClient.delete<Customers>(this.API + '/' + customerId);
  }
  editCustomer(customer, customerId): Observable<Customers>{
    return this.httpClient.put<Customers>(this.API + '/' + customerId, customer);
  }
  getAllCustomerType(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.API1);
  }
}
