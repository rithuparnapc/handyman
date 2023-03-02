import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../painting.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit{
  paintings: any;
  constructor(private painting:PaintingService){}
  ngOnInit(): void {
    this.painting.getPainters().subscribe(
      (data:any)=>{
       this.paintings = data.painters;
      }
    )
  }

  confirm(){
    alert('your booking confirmed')
  }

  //add to booking
  bookpaint(painter:any){
    this.painting.bookpaint(painter) 
  }
}
