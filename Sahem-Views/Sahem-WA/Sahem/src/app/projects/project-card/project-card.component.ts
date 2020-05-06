import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Models/Content/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  reached: number = 0;
  progress: number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.project);
    // this.calculateFunds();
    // this.calculateProjectProgress();
  }
  calculateProjectProgress() {
    this.progress = this.project.calculateProjectProgress();
  }
  calculateFunds() {
    this.reached = this.project.calculateFunds();
  }

}
