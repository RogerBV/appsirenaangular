import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RegisteredCuentaContable } from '../models/Responses/RegisteredCuentaContable';
@Injectable({
  providedIn: 'root'
})
export class AccountingServicesService {
  static readonly apiRouteReport:string = environment.apiEndPoint
  constructor(private http:HttpClient) { }
  public getCuentasContablesProveedor():Observable<RegisteredCuentaContable[]>{
    return this.http.get<RegisteredCuentaContable[]>(AccountingServicesService.apiRouteReport+"getCuentasContablesProveedor");
  }
}
