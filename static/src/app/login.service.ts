import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private storeRef:string = "ohdearme_time"
  
  constructor( private _router: Router ) {

  }

  setUser = (newName: string)=>{
    console.log("Our user is", newName)
    localStorage.setItem(this.storeRef, newName)
  }

  unsetUser = () => {
    localStorage.clear()
  }

  checkUser = ()=>{
    const existingUser = localStorage.getItem(this.storeRef)
    if (existingUser){
      return existingUser
    }
    return false
  }
}
