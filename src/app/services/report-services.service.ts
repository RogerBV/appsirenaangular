import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisteredDocumentoLibroCajaBancos } from '../models/Responses/RegisteredDocumentoLibroCajaBancos';
import { RegisteredBanco } from '../models/Responses/RegisteredBanco';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ReportServicesService {
  static readonly apiRouteReport:string = environment.apiEndPoint
  constructor(private http:HttpClient) { 
    
  }
  public ConsultarReporteLibroCajaBancos(dFechaInicio:string,dFechaFin:string,banco:string):Observable<RegisteredDocumentoLibroCajaBancos[]>{
    const options = {
      params : new HttpParams()
        .set('dFechaInicio',dFechaInicio)
        .set('dFechaFin',dFechaFin)
        .set('banco',banco)
    }
    return this.http.get<RegisteredDocumentoLibroCajaBancos[]>(ReportServicesService.apiRouteReport+"ConsultarReporteLibroCajaBancos?dFechaInicio="+dFechaInicio+"&dFechaFin="+dFechaFin+"&banco="+banco);
  }
  public ConsultarBancos():Observable<RegisteredBanco[]>{
    return this.http.get<RegisteredBanco[]>(ReportServicesService.apiRouteReport+"ConsultarBancos");
  }
}
