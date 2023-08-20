import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailedComponent } from './project-detailed.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDetailedRoutingModule {}
