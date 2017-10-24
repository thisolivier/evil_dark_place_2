import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Http } from '@angular/http'
import 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AuctionService {

  constructor(private _http:Http, private _login:LoginService) { }

  getProducts() {
    return this._http.get('/product').map(data=> data.json()).toPromise()
  }

  makeBid(productNo, bids){
    console.log("Bid service is making a bid for product", productNo)
    if(this._login.checkUser()){
      let payload = {
        product: productNo,
        bids: bids
      }
      return this._http.post('/bid', payload).toPromise()
    }
  }

  endAuction(){
    console.log("Ending auction")
    return this._http.post('/auction/end', {name: this._login.checkUser()}).toPromise()
  }

  resetAuction(){
    console.log("Resetting auction")
    this.getProducts().then(
      data => {
        console.log()
        for (let product of data){
          this.makeBid(product._id, [])
        }
      }
    )
    .catch(
      err => {console.log("We have an error", err)}
    )
    return this._http.get('/auction/reset').toPromise()
  }

  checkAuction(){
    console.log("Checking auction status")
    return this._http.get('/auction/status').map( data => data.json() ).toPromise()
  }

}
