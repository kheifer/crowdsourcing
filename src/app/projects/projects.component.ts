import { Component, OnInit } from '@angular/core';
import {Project} from '../project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor(private router: Router) { }


  projects: Project[] = [
    new Project("Project Name", "Guy McGuy", 450000, "To take over one park block for a reasonable amount of time", "September 24, 2018", "Begging", 1)
  ];
  
    goToDetail(clickedProject: Project){
      this.router.navigate(['projects', clickedProject.id]);
    }

  ngOnInit() {
  }

}
