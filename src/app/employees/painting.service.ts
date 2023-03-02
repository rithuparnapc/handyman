import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  constructor(private http:HttpClient) { }
  paintarray:any=[];
  paintlist=new BehaviorSubject([]) 

  getPainters(){
    return this.http.get('http://localhost:3000/painters')
  }

  bookpaint(painter:any){
    this.paintarray.push(painter)
    this.paintlist.next(this.paintarray)
    console.log(this.paintlist);
  }

  removepainter(painter:any){
    this.paintarray.map((dataa:any)=>{
      this.paintarray.splice(dataa,1)
    })
    this.paintlist.next(this.paintarray)
   }
}
