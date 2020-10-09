import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRestaurant =new FormGroup({
    email: new FormControl (''),
    password: new FormControl (''),
 
 
   })
alert:boolean = false;
email:string;
password:string;
  constructor(resto:CommonService,private router:Router) { }

  ngOnInit(): void {
  }
logIn(){
  if(this.email =="admin@gmail.com" && this.password=="Ikhlass123"){
    this.router.navigate(['/list'])
  }
  else 

  {
    alert("Please Enter Valid Details");
  }

  
}
}
