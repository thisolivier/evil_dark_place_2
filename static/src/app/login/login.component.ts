import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string

  constructor(
    private _login: LoginService,
    private _router: Router
  ) { 
  }

  ngOnInit() {
  }

  processLogin(){
    console.log('Trying to log in', this.name)
    this._login.setUser(this.name)
    this._router.navigate(['/auctions'])
  }
}