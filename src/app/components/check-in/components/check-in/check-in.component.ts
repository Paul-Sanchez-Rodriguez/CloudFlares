import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckInService } from '../../services/check-in.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../login/services/login.service';




@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit{

  user!: FormGroup;

  constructor(private fb: FormBuilder, private checkIn:CheckInService, private loginService:LoginService, private router:Router){}

  ngOnInit(): void {
    this.user = this.fb.group({
      username:['', Validators.required],
      email:['', Validators.required],
      firsName:[''],
      lastName:[''],
      password:['', Validators.required],
    })
  }


  register(){
    this.checkIn.register(this.user.value).subscribe((res:any) =>{
      console.log(res);

      if(res.message == "Usuario creado con éxito"){
        this.user.reset();
        this.loginService.login();
      }
    })
  }

  cancelar(){
    this.router.navigate(['home'])
  }

}
