import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreUIModule } from '@epsilon/core-ui'; 
import { CoreUIMiniModule } from '@epsilon/core-ui/mini';
import { CoreUIDataVizModule } from '@epsilon/core-ui/data-viz';
import { ReportsComponent } from './reports/reports.component'; 
import { OrderByPipe } from './pipes/order-by.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreUIModule,
    CoreUIDataVizModule,
    CoreUIMiniModule,
    HttpClientModule
  ],
  exports: [OrderByPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
