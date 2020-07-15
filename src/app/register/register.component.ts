import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  
  constructor(private authservice:AuthService,private router:Router) { }

  email= "";
  password="";
  message = '';
  errorMsg = ''; //validation error handle

  error:{name:string , message:string } = { name: '' ,message: '' }; //firebase error handle

  ngOnInit(): void {
  }

  register(){
    this.clearErrorMsg();
     if(this.validateForm(this.email,this.password)){
       this.authservice.registerWithEmail(this.email,this.password).then(() =>{
        this.message = "Succssfully registered."
       }).catch(_error=>{
         this.error = _error
         this.router.navigate(['/register'])
       })
     }
  }

  validateForm(email,password){
    if(email.lenght === 0){
      this.errorMsg = "Pleace enter e-mail id.";
      return false;
    }

    if(password.lenght === 0){
      this.errorMsg = "Pleace enter password.";
      return false;
    }

    if(password.lenght < 6){
      this.errorMsg = "Password should be at least 6 charactors.";
      return false;
    }
    this.errorMsg = '';
    return true;
  }

  clearErrorMsg(){
    this.errorMsg = '';
    this.error= {name:'',message:''};
  }
}
