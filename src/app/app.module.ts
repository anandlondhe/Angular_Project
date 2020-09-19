import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'


import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeadComponent } from './head/head.component';

import { CartComponent } from './cart/cart.component';
import { FileuploadComponent } from './fileupload/fileupload.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FooterComponent,
    BodyComponent,
    AboutUsComponent,
    RegistrationComponent,
    HeadComponent,
   
    CartComponent,
   
    FileuploadComponent,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

