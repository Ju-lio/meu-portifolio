import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [ContactComponent,CardComponent],
  imports: [CommonModule,ContactRoutingModule,RouterModule]
})
export class ContactModule { }
