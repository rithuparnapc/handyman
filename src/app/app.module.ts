import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesModule } from './employees/employees.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BookingComponent } from './booking/booking.component';
//import { HousekeepersModule} ''
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
    //BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    FormsModule,
    ReactiveFormsModule,
    //HousekeepersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
