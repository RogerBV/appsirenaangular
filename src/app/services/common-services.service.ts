import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisteredTipoGeneral } from '../models/Responses/RegisteredTipoGeneral';
@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  static readonly apiRouteReport:string = environment.apiEndPoint
  constructor(private http:HttpClient) { }
  public ConsultarTipoGeneral(nTGeCodigo:string):Observable<RegisteredTipoGeneral[]>{
    return this.http.get<RegisteredTipoGeneral[]>(CommonServicesService.apiRouteReport+"getTipoGeneral?nTGeCodigo="+nTGeCodigo);
  }
}
