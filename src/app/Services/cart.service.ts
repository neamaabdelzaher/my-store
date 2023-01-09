import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 uName:string='';
  constructor(private http:HttpClient) { }


  // addToCart(product:any){

  //   return  this.http.post(`http://localhost:3000/cart/`,product);
  // }

  // getFromCart(){

  //   return  this.http.get(`http://localhost:3000/cart/`);

  // }

  showUName(userName:string){
   this.uName=userName;


  }

  returnUsername(){

    return this.uName;
  }





}
