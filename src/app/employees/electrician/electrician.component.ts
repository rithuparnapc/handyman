import { Component, OnInit } from '@angular/core';
import { ElectricianService } from '../electrician.service';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.css']
})
export class ElectricianComponent  implements OnInit {
  electricians: any=[];
  
  constructor(private electrician:ElectricianService ){ }

  ngOnInit(): void {

    this.electrician.getelectricians().subscribe(
      (data:any)=>{
       this.electricians = data.employees;
      }
    )
  }
  
  confirm(){
    alert('your booking confirmed')
  }
  

  addtobooking(employee:any){
      
  this.electrician.addtobooking(employee)
    }
  
}
