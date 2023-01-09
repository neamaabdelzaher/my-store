import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cart } from '../cart';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cart:Product[]=[];
  count:number=0;
 
  private httpOptions={};
  
  constructor( private http:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };

   }

  getAllProducts():Observable<Product[]>{
  // return this.http.get<Product[]>("/assets/products.json");
  return this.http.get<Product[]>("http://localhost:3000/products");


  }

  // get product by ID
  getProductById(id:number):Observable<Product|undefined>{
    // return  this.http.get<Product>(`/assets/products.json/`+id);
    return  this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }


  // to push the product to the cart

  addProductToCard(pro:Product,amount:any){
         
        this.cart.push(pro);

     
        // this.count+=parseInt(amount);
       
       
  
       
        
      }
    
    

      

    
    
      
  returncount(){

    return this.count;
  }

  getProductFromCart(){

     return this.cart;
  }



  /////
   // function to add product 
  
//    addProduct(Prd:Cart,amount:number):Observable<Cart>{
//     return this.http.post<Cart>(`http://localhost:3000/cart`,JSON.stringify(Prd),this.httpOptions)
   
    
// }

// getProductFromCart():Observable<Cart[]>{

//   return this.http.get<Cart[]>("http://localhost:3000/cart");
 


// }




}
