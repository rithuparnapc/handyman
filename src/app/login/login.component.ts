import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private  router:Router,private ds:DataService, private fb:FormBuilder){

  }

  userid:any;
  pswd:any;
  currentUser:any;

  userDetails:any={
    1000:{userid:1000,username:"fabi",password:1000},
    1001:{userid:1001,username:"ikru",password:1001},
    1002:{userid:1002,username:"jifa",password:1002},
  }

  loginForm=this.fb.group({
    //group
    userid:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })


  login(){
    var userid=this.userid;
    var pswd= this.pswd;
    var userDetails= this.userDetails;
    const result=this.ds.login(userid,pswd)
    if(result){
      alert('Login SUccessful :)')
      this.router.navigateByUrl('employees');
      
    }
    else{
      alert('Login successful :)')
     //  console.log(this.loginForm.get('userid')?.errors);
      
    }
    }
}
