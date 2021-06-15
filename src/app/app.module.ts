import { RouterModule,Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuFormComponent } from './components/menu-form/menu-form.component';
import { ReporteestadocuentaproveedorFormComponent } from './components/reporteestadocuentaproveedor-form/reporteestadocuentaproveedor-form.component';
import { ReportevalidacuentaproveedorFormComponent } from './components/reportevalidacuentaproveedor-form/reportevalidacuentaproveedor-form.component';
import { ReportelibrocajabancosFormComponent } from './components/reportelibrocajabancos-form/reportelibrocajabancos-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
const appRoutes : Routes  =[
  {
    path:'Menu'
    ,component:MenuFormComponent
    ,children:[
      {
        path:'ReporteLibroCajaBancos'
        ,component:ReportelibrocajabancosFormComponent
        ,outlet:'second'
      },
      {
        path:'Reporteestadocuentaproveedor'
        ,component:ReporteestadocuentaproveedorFormComponent
        ,outlet:'second'
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuFormComponent,
    ReporteestadocuentaproveedorFormComponent,
    ReportevalidacuentaproveedorFormComponent,
    ReportelibrocajabancosFormComponent
  ],
  exports:[
    MatDatepickerModule,
    MatNativeDateModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
