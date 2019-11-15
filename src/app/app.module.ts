import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
