import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SkillsRoutingModule, RouterModule]
})
export class SkillsModule { }
