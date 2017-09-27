import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Project} from '../project.model';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: number;
  projectToDisplay: Project;

  constructor(private incomingRoute: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.incomingRoute.params.forEach((urlParams)=>{
      this.projectId = parseInt(urlParams['id']);
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
