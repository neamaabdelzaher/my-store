import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/cart';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
   IProduct:Product[]=[];
   sub:Subscription;
   Prd:Product={} as Product;
   count:number=0;

    
  
  constructor( private productsService:ProductsService,
     private cartService:CartService, private router:Router){
  
    // import the service to get all the products 
   this.sub= this.productsService.getAllProducts().subscribe(data=>{

      this.IProduct=data;
      console.log(this.IProduct);
      
    }
      
      );

  }



  ngOnInit():void{

    

  }


  addToCard(pro:Product,itemCount:any){

  if(itemCount>0 )
  { 
    


    
    this.productsService.addProductToCard(pro,itemCount);
    console.log(pro.id);
   
    alert("Added TO Cart!")
  }
    
    else{
      alert("select one item at least !")
    }

  }




  // destory 
  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }
  

  ////

  // addProduct(product:Product,amount:any){
 
  //   this.productsService.addProduct(product,amount).subscribe({
  //     next:(prd)=>{

  //        console.log(prd);
  //       // this.router.navigate(['/cart']);
  //     this.count=this.count+parseInt(amount);
      
       
  //     },
  //     error:(err)=>{
  //       alert("Error occured");
  //     }
  //   });
  

  // }
}
