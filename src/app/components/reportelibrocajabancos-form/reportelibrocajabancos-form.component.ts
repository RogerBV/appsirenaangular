import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisteredDocumentoLibroCajaBancos } from 'src/app/models/Responses/RegisteredDocumentoLibroCajaBancos';
import { ReportServicesService } from 'src/app/services/report-services.service';
import { formatDate} from '@angular/common';
import { RegisteredBanco } from 'src/app/models/Responses/RegisteredBanco';
import { PageEvent,MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
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
  public dataSource = new MatTableDataSource<RegisteredDocumentoLibroCajaBancos>();
  public pageSlice = this.registeredDocumentoList.slice(0,15);

  constructor(private fb:FormBuilder, private reportService:ReportServicesService) { 
    this.range = this.fb.group({
      start: new FormControl(),
      end: new FormControl()
    });
    this.fBanco = new FormGroup({
      bancoControl:new FormControl()
    });
  }
  ngOnInit(): void {
    this.ListBancos();
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
    const banco_Detalle_Id = this.fBanco?.get('bancoControl')?.value;
    if(banco_Detalle_Id > 0)
    {
      const banco = this.bancosList.filter( x => x.Banco_Detalle_Id == banco_Detalle_Id )[0];
      const sCtaNombre = banco.sCtaNombre;
      const sBanNombre = banco.sBanNombre;
      this.reportService.ConsultarReporteLibroCajaBancos(dFechaInicio,dFechaFin,sCtaNombre,sBanNombre).subscribe(registeredDocumentoList=>{
        this.registeredDocumentoList = registeredDocumentoList;
        this.dataSource = new MatTableDataSource(this.registeredDocumentoList);
        this.pageSlice = this.registeredDocumentoList.slice(0,15);
      });
    }
    
  }
  OnPageChange(event:PageEvent)
  {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.registeredDocumentoList.length)
    {
      endIndex = this.registeredDocumentoList.length;
    }
    this.pageSlice = this.registeredDocumentoList.slice(startIndex,endIndex);
  }
  
}
