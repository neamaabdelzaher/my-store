import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ProductsService } from 'src/app/Services/products.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
singleProduct:Product|any;
sub:Subscription;
productId=Number(this.activatedRoute.snapshot.paramMap.get("id"));


constructor(private productsService:ProductsService,
  private activatedRoute:ActivatedRoute ,private location:Location){


    
this.sub=this.productsService.getProductById(this.productId).subscribe(pro=>{
  this.singleProduct=pro ;
  console.log(pro);

}
)
}



// get product by id 
ngOnInit():void{
  
}



ngOnDestroy(): void {

  this.sub.unsubscribe();
}
}
