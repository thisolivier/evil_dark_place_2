import { Component, OnInit } from '@angular/core'
import { LoginService } from './../login.service'
import { AuctionService } from './../auction.service'
import { Router } from '@angular/router'
import 'rxjs'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  products: Array<any>
  searchFields = []
  bidFields = []
  badBidFields = [false, false, false]

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
  isOver(){
    this._auction.checkAuction()
    .then(
      data => {
        console.log("Got auction data back", data)
        if (data.over){
          console.log("Auction is over")
          this._router.navigate(['/results'])
        }      
      }
    )
    .catch(
      err => {console.log("No time for this shit! Auction check failed", err)}
    )
  }

  getProducts(){
    this._auction.getProducts()
      .then( data => {
          console.log("We have the products", data)
          this.products = data
      })
      .catch( err => { 
        console.log("Something went wrong loading products to auction", err)
      })
  }

  logout(){
    this._login.unsetUser()
    this._router.navigate(['/'])
  }

  processBid(productNum){
    console.log("Bid placed for product", productNum)
    let newBidNum = this.bidFields[productNum]

    if (this.isHigher(productNum, newBidNum)){
      this.badBidFields[productNum] = false
      let newBidObj = {
        name: this._login.checkUser(),
        ammount: newBidNum
      }
      console.log("New bid object created", newBidObj)

      let newBids = this.products[productNum].bids
      if (newBids === undefined){
        newBids = [newBidObj]
      } else {
        newBids.push(newBidObj)
      }
      console.log("New list of bids generated", newBids)

      this._auction.makeBid(this.products[productNum]._id, newBids)
      .then( data => {
        console.log("We made a bid!")
        this.getProducts()
      })
      .catch( err => {
        console.log("Bidding went wrong", err)
      })

    } else {
      this.badBidFields[productNum] = true
    }
  }

  isHigher(num, bid){
    let numBids = this.products[num].bids.length
    if ( numBids == 0 ){
      console.log("Bid is good")
      return true
    } else if (bid > this.products[num].bids[numBids - 1].ammount){
      console.log("Bid is good")
      return true
    }
    console.log("Bid is bad", bid, this.products[num].bids[numBids - 1])
    return false
  }

  processEnd(){
    let allBidded = true
    for (let product of this.products){
      if (product.bids.length == 0){
        allBidded = false
      }
    }
    if (allBidded) {
      this._auction.endAuction()
      .then( data => {console.log("Ended auction", data)} )
      .catch( err => {console.log("Auction attempted to end auction, fail", err)})
      this._router.navigate(['/results'])
    } else {
      alert("Cannot end bidding!\nSome items still have no bids")
    }
  }

}
