import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectDetailedComponent } from './project-detailed.component';
import { ProjectDetailedRoutingModule } from './project-detailed-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ProjectDetailedComponent],
  imports: [
    CommonModule,
    ProjectDetailedRoutingModule,
    RouterModule,
    ComponentsModule,
  ],
})
export class ProjectDetailedModule {}
