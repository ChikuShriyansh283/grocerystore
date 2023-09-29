import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HomepageComponent,
    AboutComponent,
    EventsComponent,
    ServicesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
