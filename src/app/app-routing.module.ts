import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
       import('./modules/home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
       import('./modules/skills/skills.module').then( m => m.SkillsModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
       import('./modules/projects/projects.module').then( m => m.ProjectsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
       import('./modules/contact/contact.module').then( m => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
