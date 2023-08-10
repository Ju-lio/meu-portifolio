import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [BrowserModule,AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
