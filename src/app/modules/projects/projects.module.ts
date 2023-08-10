import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule,ProjectsRoutingModule,RouterModule]
})
export class ProjectsModule { }
