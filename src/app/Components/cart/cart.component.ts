import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Product[]=[];
  amount:any;
  receivedOrderTotalPrice: number=0;

  // userFormGroup:FormGroup;
  userFormGroup = new FormGroup({
    fullName: new FormControl ('',[Validators.required,Validators.minLength(3)]),
    address:new FormControl ('',[Validators.required,Validators.minLength(5)]),
    credit: new FormControl ('',[Validators.required,Validators.minLength(16),Validators.maxLength(16)])


  });

constructor(private productsService:ProductsService ,private cartService:CartService,
  private router:Router){



}
get fullName(){
  return this.userFormGroup.get('fullName');
}

get address(){
  return this.userFormGroup.get('address');
}
get credit(){
  return this.userFormGroup.get('credit');
}

ngOnInit():void{

  this.cart=this.productsService.getProductFromCart()
  // this.productsService.getProductFromCart().subscribe(data=>{
  // this.cart=data;

  // })


 
  this.amount=this.productsService.returncount();

  console.log(this.amount);
  
 
  let total=0;

  for( let pro of this.cart){

    total +=pro.price*this.amount;
   
  }

  console.log(total);
  


  
}








success(){

this.cartService.showUName(this.userFormGroup.controls.fullName.value!);
this.router.navigate(['/success']);

}
 





}
