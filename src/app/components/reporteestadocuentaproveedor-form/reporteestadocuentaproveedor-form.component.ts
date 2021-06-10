import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisteredCuentaContable } from 'src/app/models/Responses/RegisteredCuentaContable';
import { RegisteredDocumentoEstadoCuentaProveedor } from 'src/app/models/Responses/RegisteredDocumentoEstadoCuentaProveedor';
import { RegisteredTipoGeneral } from 'src/app/models/Responses/RegisteredTipoGeneral';
import { AccountingServicesService } from 'src/app/services/accounting-services.service';
import { CommonServicesService } from 'src/app/services/common-services.service';
import { ReportServicesService } from 'src/app/services/report-services.service';

@Component({
  selector: 'app-reporteestadocuentaproveedor-form',
  templateUrl: './reporteestadocuentaproveedor-form.component.html',
  styleUrls: ['./reporteestadocuentaproveedor-form.component.css']
})
export class ReporteestadocuentaproveedorFormComponent implements OnInit {
  public cuentaContableList:RegisteredCuentaContable[] = [];
  public mesList:RegisteredTipoGeneral[] = [];
  public registeredDocumentoList:RegisteredDocumentoEstadoCuentaProveedor[] = [];
  public displayedColumns: string[] = ['sDPaNumero','dDPaFecha'];
  public pageSlice = this.registeredDocumentoList.slice(0,15);
  public filtroCuentaContable:FormGroup = new FormGroup({
    cuentaContable:new FormControl()
  });

  public filtroMes:FormGroup = new FormGroup({
    mesControl:new FormControl()
  });

  constructor(private commonService:CommonServicesService, private accountService:AccountingServicesService, private reportService:ReportServicesService) { 
    this.ListMeses();
    this.ListCuentasContables();
  }
  public ListCuentasContables()
  {
    this.accountService.getCuentasContablesProveedor().subscribe(response=>{
      this.cuentaContableList = response;
    });
  }
  public ListMeses()
  {
    this.commonService.ConsultarTipoGeneral("6063").subscribe(response=>{
      console.log(response);
      this.mesList = response;
    });
  }
  ngOnInit(): void {
    
  }

}
