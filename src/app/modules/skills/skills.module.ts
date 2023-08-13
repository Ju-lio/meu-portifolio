import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [SkillsComponent, CardComponent],
  imports: [CommonModule, SkillsRoutingModule, RouterModule]
})
export class SkillsModule { }
