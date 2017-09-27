import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {ProjectsComponent} from './projects/projects.component'

const APP_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  {path: 'projects', component: ProjectsComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
