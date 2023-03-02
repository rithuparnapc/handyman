import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ElectricianService } from '../electrician.service';
import { HousekeepingService } from '../housekeeping.service';
import { PaintingService } from '../painting.service';
import { PlumbingService } from '../plumbing.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  eMsg: any;
  bookingg: any;
  houseitem: any=[];
  eleitem:any=[];
  paintitem:any=[];
  pluitem:any=[];
  plumber:any;
 employee: any;
 addtobooking: any;

  constructor( private booking:BookingService,private housekeeping:HousekeepingService,
    private electrician:ElectricianService,private painting:PaintingService,private plumbing:PlumbingService){ }
  ngOnInit(): void {
    //this.booking.getbooking().subscribe(
     // (data:any)=>{
     //   this.bookingg=data.booking
     // },
     // (data:any)=>{
     //   this.eMsg=data.error.message
     // }
   // )



    this.housekeeping.booklist.subscribe(
      (data:any)=>{
        console.log(data);
        this.houseitem=data
        
      }
    )

    this.electrician.elelist.subscribe(
      (dataa:any)=>{
        console.log(dataa);
        this.eleitem=dataa
        
      }
    )

    this.painting.paintlist.subscribe(
      (dataaa:any)=>{
        console.log(dataaa);
        this.paintitem=dataaa
        
      }
    )

    this.plumbing.plulist.subscribe(
      (dataaaa:any)=>{
        console.log(dataaaa);
        this.pluitem=dataaaa
        
      }
    ) 


  }

  //deletebook(housekeeper:any){
//this.housekeeping.deletebook(housekeeper.name).subscribe(
 // (result:any)=>{
 //   alert(result.message)
 // },
 // (result:any)=>{
 //   alert(result.error.message)
 // }
//)
 // }
  removehk(housekeeper:any){
this.housekeeping.removehk(housekeeper)
  }

  removebooking(employee:any){
    this.electrician.removebooking(employee)
      }

      removepainter(painter:any){
        this.painting.removepainter(painter)
          }
          removeplumber(plumber:any){
            this.plumbing.removeplumber(plumber)
              }        
}
