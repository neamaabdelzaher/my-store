import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

constructor(private cartService:CartService,
  private router:Router){


}
 // userFormGroup:FormGroup;
 userFormGroup = new FormGroup({
  fullName: new FormControl ('',[Validators.required,Validators.minLength(3)]),
  address:new FormControl ('',[Validators.required,Validators.minLength(5)]),
  credit: new FormControl ('',[Validators.required,Validators.minLength(16),Validators.maxLength(16)])


});



get fullName(){
  return this.userFormGroup.get('fullName');
}

get address(){
  return this.userFormGroup.get('address');
}
get credit(){
  return this.userFormGroup.get('credit');
}

success(){

  this.cartService.showUName(this.userFormGroup.controls.fullName.value!);
  this.router.navigate(['/success']);
  
  }
   


}
