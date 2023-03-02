import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectricianService {

  constructor(private http:HttpClient) { }
  elearray:any=[];
  elelist=new BehaviorSubject([]);

  getelectricians(){
    return this.http.get('http://localhost:3000/all-employees')
  }
  //Add to confirm booking
  addtobooking(employee:any){
    this.elearray.push(employee)
    this.elelist.next(this.elearray)
    console.log(this.elelist);
    


  }
  removebooking(employee:any){
    this.elearray.map((dataa:any)=>{
      this.elearray.splice(dataa,1)
    })
    this.elelist.next(this.elearray)
   }



  

//get bookings
  getbooking(){
    return this.http.get('http://localhost:3000/getbooking')
  }

  join(name:any,category:any,location:any,experience:any,payment:any){
const body={
  name,
  category,
  location,
  experience,
  payment
}
return this.http.post('http://localhost:3000/join',body)
  }
}

