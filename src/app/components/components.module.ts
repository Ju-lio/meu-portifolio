import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, PageNotFoundComponent],
  exports: [CardComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class ComponentsModule {}
