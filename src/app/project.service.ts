import { Injectable } from '@angular/core';
import {Project} from './project.model';
import {PROJECTS} from './practice-projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(){
    return PROJECTS;
  }

}
