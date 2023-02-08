import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesModule } from './employees/employees.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{path:'',redirectTo:'/employees',pathMatch:'full'},
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
{path:'**',component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  //EmployeesModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
