import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemsService } from './services/items.service';
import { HttpClientModule } from '@angular/common/http'       // import http client module to make http requests

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemListComponent,
    ItemComponent,
    CheckoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // add it to the imports
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
