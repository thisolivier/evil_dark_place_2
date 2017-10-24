import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service'
import { AuctionService } from './../auction.service'
import { Router } from '@angular/router'
import 'rxjs'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  products: Array<any>
  ender: String

  constructor(
    private _login: LoginService,
    private _router: Router,
    private _auction: AuctionService
  ) {
  }

  ngOnInit() {
    console.log("Made it to the auction")
    if (this._login.checkUser() === false){
      this._router.navigate(['/'])
    }
    this.isOver()
    this.getProducts()
  }

  getProducts(){
    this._auction.getProducts()
      .then( data => {
          console.log("We have the products", data)
          this.products = data
          this.getWinner()
      })
      .catch( err => { 
        console.log("Something went wrong loading products to auction", err)
      })
  }

  logout(){
    this._login.unsetUser()
    this._router.navigate(['/'])
  }

  isOver(){
    this._auction.checkAuction()
    .then(
      data => {
        console.log("Got auction data back", data)
        if (!data.over){
          console.log("Auction is not yet over")
          this._router.navigate(['/auctions'])
        } else {
          this.ender = data.name
        }
      }
    )
    .catch(
      err => {console.log("No time for this shit! Auction check failed", err)}
    )
  }

  getWinner(){
    for (let product of this.products){
      product.winner = product.bids[product.bids.length -1]
    }
  }

  beginAgain(){
    this._auction.resetAuction()
    .then( data => {
      this._router.navigate(['/auctions'])
    })
    .catch( err =>{
      console.log("Something went wrong", err)
    }
    )
  }
}
