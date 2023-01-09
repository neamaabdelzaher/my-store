import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { SuccessComponent } from './Components/success/success.component';


const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductsListComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'success',component:SuccessComponent},
  {path:'form',component:CheckoutFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
