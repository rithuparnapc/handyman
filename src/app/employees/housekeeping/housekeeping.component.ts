import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';

@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css']
})
export class HousekeepingComponent implements OnInit{
  housekeepings: any;
housekeeper: any;
  

  constructor(private housekeeping:HousekeepingService){}
  ngOnInit(): void {
    this.housekeeping.getHousekeepers().subscribe(
      (data:any)=>{
       this.housekeepings = data.housekeepers;
      }
    )
  }


//add to bookings
  bookhk(housekeeper:any){
    this.housekeeping.bookhk(housekeeper) 
  }

  confirm(){
    alert('your booking confirmed')
  }

}
