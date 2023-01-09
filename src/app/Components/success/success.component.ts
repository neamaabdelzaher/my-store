import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

 userName:string='';

  constructor( private cartService:CartService){


  }


  ngOnInit():void{
    
    this.userName=this.cartService.returnUsername();

  }
}
