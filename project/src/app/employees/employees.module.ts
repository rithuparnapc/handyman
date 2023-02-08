import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { PaintingComponent } from './painting/painting.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    EmployeesComponent,
    AllCategoryComponent,
    PlumbingComponent,
    PaintingComponent,
    HousekeepingComponent,
    ElectricianComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule
  ]
})
export class EmployeesModule { }
