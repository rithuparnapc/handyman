import { Component, OnInit } from '@angular/core';
import { ElectricianService } from '../electrician.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit{
  value: any;
  constructor(private electrician:ElectricianService ){ }
  name:any;
  category:any;
  location:any;
  experience:any;
  payment:any;
  ngOnInit(): void {
  }
  join(){
    alert('details submitted')
    var name=this.value.name;
    var category=this.value.category;
    var location=this.value.location;
    var experience=this.value.experience;
    var payment=this.value.payment
    const result =this.electrician.join(name,category,location,experience,payment).subscribe(
      (result:any)=>{
        alert(result.message)
       
        
      })
  }
}
