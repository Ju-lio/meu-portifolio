import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SkillsRoutingModule, RouterModule, ComponentsModule],
})
export class SkillsModule {}
