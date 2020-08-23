import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployComponent } from './employ/employ.component';



@NgModule({
  declarations: [EmployComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EmployComponent
  ]
})
export class CompanyModule { }
