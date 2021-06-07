import { Component, OnInit } from '@angular/core';
import { RegisteredDocumentoLibroCajaBancos } from '../../models/Responses/RegisteredDocumentoLibroCajaBancos';
import { ReportServicesService } from '../../services/report-services.service';
@Component({
  selector: 'app-reportevalidacuentaproveedor-form',
  templateUrl: './reportevalidacuentaproveedor-form.component.html',
  styleUrls: ['./reportevalidacuentaproveedor-form.component.css']
})
export class ReportevalidacuentaproveedorFormComponent implements OnInit {
  public registeredDocumentoList:RegisteredDocumentoLibroCajaBancos[] = [];
  public displayedColumns: string[] = ['Sec', 'CtaCtb','NomBanco'];
  constructor(private reportService:ReportServicesService) { 

  }

  ngOnInit(): void {
    
  }

}
