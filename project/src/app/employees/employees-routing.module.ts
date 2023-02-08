import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoryComponent } from './all-category/all-category.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { EmployeesComponent } from './employees.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { PaintingComponent } from './painting/painting.component';
import { PlumbingComponent } from './plumbing/plumbing.component';

const routes: Routes = [
  { path: '', component: AllCategoryComponent  },//for all category of work
  { path: 'electrician', component: ElectricianComponent  },//for all electricians
  { path: 'housekeeping', component: HousekeepingComponent },//for all house keepers
  { path: 'painting', component: PaintingComponent   },//for all painters
  { path: 'plumbing', component: PlumbingComponent  },//for all pluumbers
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
