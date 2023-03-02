import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userid:any;
  uname:any;
  pswd:any;
  

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){}


  signupForm=this.fb.group({
    //group
    userid:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  signup(){
    var userid=this.signupForm.value.userid;
    var uname=this.signupForm.value.uname;
    var pswd=this.signupForm.value.pswd;
    var userDetails=this.ds.userDetails;
    const result=this.ds.signup(userid,uname,pswd)
    if(result){
      alert('Signed In :)')
      this.router.navigateByUrl('employees/login');
    }
    else{
      alert('Register Failed :(')
      console.log(this.signupForm.get('uname')?.errors);
      
    }
    
    
}
}
