import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
import {Router} from '@angular/router';

import {ProjectService} from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) { }




  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetail(clickedProject: Project){
      this.router.navigate(['projects', clickedProject.id]);
    }



}
