import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { BookingComponent } from './booking/booking.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { EmployeesComponent } from './employees.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { JoinComponent } from './join/join.component';
import { PaintingComponent } from './painting/painting.component';
import { PlumbingComponent } from './plumbing/plumbing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: AllCategoryComponent  },//for all category of work
  { path: 'electrician', component: ElectricianComponent  },//for all electricians
  { path: 'housekeeping', component: HousekeepingComponent },//for all house keepers
  { path: 'painting', component: PaintingComponent   },//for all painters
  { path: 'plumbing', component: PlumbingComponent  },//for all pluumbers
  { path: 'booking', component: BookingComponent  },
  { path: 'join', component:JoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
