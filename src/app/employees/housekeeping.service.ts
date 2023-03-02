import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousekeepingService {
  bookarray: any=[];
  booklist=new BehaviorSubject([])

  constructor(private http:HttpClient) { }

  getHousekeepers(){
    return this.http.get('http://localhost:3000/housekeepers')
  }

  bookhk(housekeeper:any){
   this.bookarray.push(housekeeper)
   this.booklist.next(this.bookarray)
   console.log(this.booklist);
   

  }
  //delete book
  //deletebook(name:any){
  // return this.http.delete('http://localhost:3000/deletebook/'+name)
 // }

 removehk(housekeeper:any){
  this.bookarray.map((data:any)=>{
    this.bookarray.splice(data,1)
  })
  this.booklist.next(this.bookarray)
 }
}
