import { Component, OnInit } from '@angular/core';
import { RegisteredDocumentoLibroCajaBancos } from 'src/app/models/Responses/RegisteredDocumentoLibroCajaBancos';
import { ReportServicesService } from 'src/app/services/report-services.service';
import { formatDate} from '@angular/common';
import { RegisteredBanco } from 'src/app/models/Responses/RegisteredBanco';
import { PageEvent } from '@angular/material/paginator';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-reportelibrocajabancos-form',
  templateUrl: './reportelibrocajabancos-form.component.html',
  styleUrls: ['./reportelibrocajabancos-form.component.css']
})
export class ReportelibrocajabancosFormComponent implements OnInit {
  public registeredDocumentoList:RegisteredDocumentoLibroCajaBancos[] = [];
  public bancosList:RegisteredBanco[] = [];
  public displayedColumns: string[] = ['sVoucher','FechaImpresion', 'Numero','sVouDescripcion','sVouObservacion','Debe_Sol','Haber_Sol','Saldo_Sol'];
  public range:FormGroup= new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });  
  public fBanco:FormGroup = new FormGroup({
    bancoControl:new FormControl()
  })
  constructor(private fb:FormBuilder, private reportService:ReportServicesService) { 
    this.range = this.fb.group({
      start: new FormControl(),
      end: new FormControl()
    });
    this.fBanco = new FormGroup({
      bancoControl:new FormControl()
    }) 
  }

  ngOnInit(): void {
    this.ListBancos();
    
  }
  Consultar(){
    this.ConsultarReporteLibroCajaBancos();
    console.log(formatDate(this.range?.get('start')?.value,'yyyy-MM-dd','en-GB'));
    console.log(formatDate(this.range?.get('end')?.value,'yyyy-MM-dd','en-GB'));
  }
  ListBancos()
  {
    this.reportService.ConsultarBancos().subscribe(responseBanco=>{
      this.bancosList = responseBanco;
    });
  }
  ConsultarReporteLibroCajaBancos()
  {
    const dFechaInicio = formatDate(this.range?.get('start')?.value,'yyyy-MM-dd','en-GB');
    const dFechaFin = formatDate(this.range?.get('end')?.value,'yyyy-MM-dd','en-GB');
    const banco = this.fBanco?.get('bancoControl')?.value;
    this.reportService.ConsultarReporteLibroCajaBancos(dFechaInicio,dFechaFin,banco).subscribe(registeredDocumentoList=>{
      this.registeredDocumentoList = registeredDocumentoList;
    });
  }
  
}
