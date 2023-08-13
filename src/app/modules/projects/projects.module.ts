import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from 'src/app/components/project-card/project-card.component';

@NgModule({
  declarations: [ProjectsComponent,ProjectCardComponent],
  imports: [CommonModule,ProjectsRoutingModule,RouterModule]
})
export class ProjectsModule { }
