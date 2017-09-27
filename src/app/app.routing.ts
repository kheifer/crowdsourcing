import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';

const APP_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'projects/:id', component: ProjectDetailComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
