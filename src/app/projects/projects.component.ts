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


  projects: Project[]

    goToDetail(clickedProject: Project){
      this.router.navigate(['projects', clickedProject.id]);
    }

  ngOnInit() {
  }

}
