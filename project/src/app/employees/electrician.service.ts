import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectricianService {

  constructor(private http:HttpClient) { }

  getelectricians(){
    return this.http.get('http://localhost:3000/all-employees')
  }
  //to confirm
  toconfirmbooking(){
    alert('Your booking confirmed')
  }
}
