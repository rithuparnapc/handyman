import { Component, OnInit } from '@angular/core';
import { PlumbingService } from '../plumbing.service';

@Component({
  selector: 'app-plumbing',
  templateUrl: './plumbing.component.html',
  styleUrls: ['./plumbing.component.css']
})
export class PlumbingComponent implements OnInit{
  plumbings: any;
  constructor(private  plumbing:PlumbingService){}
  ngOnInit(): void {
    this.plumbing.getPlumbers().subscribe(
      (data:any)=>{
       this.plumbings = data.plumbers;
      }
    )
  }

   //add to booking
   bookpl(plumber:any){
    this.plumbing.bookpl(plumber) 
  }

  confirm(){
    alert('your booking confirmed')
  }
}
