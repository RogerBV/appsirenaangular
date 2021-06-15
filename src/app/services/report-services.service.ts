import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisteredDocumentoLibroCajaBancos } from '../models/Responses/RegisteredDocumentoLibroCajaBancos';
import { RegisteredBanco } from '../models/Responses/RegisteredBanco';
import { Observable } from 'rxjs'
import { RegisteredDocumentoEstadoCuentaProveedor } from '../models/Responses/RegisteredDocumentoEstadoCuentaProveedor';
@Injectable({
  providedIn: 'root'
})
export class ReportServicesService {
  static readonly apiRouteReport:string = environment.apiEndPoint
  constructor(private http:HttpClient) { 
    
  }
  public ConsultarReporteLibroCajaBancos(dFechaInicio:string,dFechaFin:string,sCtaNombre:string,sBanNombre:string):Observable<RegisteredDocumentoLibroCajaBancos[]>{
    const options = {
      params : new HttpParams()
        .set('dFechaInicio',dFechaInicio)
        .set('dFechaFin',dFechaFin)
        .set('banco',sCtaNombre)
    }
    return this.http.get<RegisteredDocumentoLibroCajaBancos[]>(ReportServicesService.apiRouteReport+"ConsultarReporteLibroCajaBancos?dFechaInicio="+dFechaInicio+"&dFechaFin="+dFechaFin+"&sCtaNombre="+sCtaNombre+"&sBanNombre="+sBanNombre);
  }
  public ConsultarBancos():Observable<RegisteredBanco[]>{
    return this.http.get<RegisteredBanco[]>(ReportServicesService.apiRouteReport+"ConsultarBancos");
  }
  public ConsultarReporteEstadoCuentaProveedor():Observable<RegisteredDocumentoEstadoCuentaProveedor[]>{
    const options = {
      params : new HttpParams()
        .set('Cuenta_Id',5105)
        .set('Periodo_Id',4)
        .set('Mes_Id',5)
    }
    return this.http.post<RegisteredDocumentoEstadoCuentaProveedor[]>(ReportServicesService.apiRouteReport+"ConsultarEstadoCuentaProveedor",null,options);
  }

}
