import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./modules/skills/skills.module').then(m => m.SkillsModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(m => m.ProjectsModule),
  },
  {
    path: 'projects/:id',
    loadChildren: () =>
      import('./modules/project-detailed/project-detailed.module').then(
        m => m.ProjectDetailedModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
