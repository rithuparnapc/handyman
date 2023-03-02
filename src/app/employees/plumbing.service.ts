import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlumbingService {

  constructor(private http:HttpClient) { }
  pluarray:any=[];
  plulist=new BehaviorSubject([])

  getPlumbers(){
    return this.http.get('http://localhost:3000/plumbers')
  }

  bookpl(plumber:any){
    this.pluarray.push(plumber)
    this.plulist.next(this.pluarray)
    console.log(this.plulist);
  }

  removeplumber(plumber:any){
    this.pluarray.map((dataaa:any)=>{
      this.pluarray.splice(dataaa,1)
    })
    this.plulist.next(this.pluarray)
   }
}
