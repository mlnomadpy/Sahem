import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Models/Content/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit(): void {
    const c = document.getElementsByClassName("layout").length;
    console.log(c);
  }

}
