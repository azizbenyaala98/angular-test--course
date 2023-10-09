import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{
  path:'home',component:MyFirstComponentComponent
},
{
  path:'about',component:AboutComponent
},
{
  path:'about/:username',component:AboutComponent
},
{
  path:'products',component:ProductsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
