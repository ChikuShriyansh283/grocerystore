import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {EventsComponent} from './events/events.component'
import {HomepageComponent} from './homepage/homepage.component'
import {ProductsComponent}from './products/products.component'
import {ServicesComponent} from './services/services.component'

const routes: Routes = [
  {path:'about' , component:AboutComponent},
  {path:'events' , component:EventsComponent},
  {path:'homepage' , component:HomepageComponent},
  {path:'products' , component:ProductsComponent},
  {path:'services' , component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
