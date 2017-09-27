import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Project} from '../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  albumId: number = null;

  constructor(private incomingRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.incomingRoute.params.forEach((urlParams)=>{
      this.albumId = parseInt(urlParams['id']);
    });
  }

}
