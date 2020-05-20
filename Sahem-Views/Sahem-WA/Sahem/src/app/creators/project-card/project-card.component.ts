import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Models/Content/Project';
import { ProjectsService } from 'src/app/projects/projects.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() projectid: string;
  api = environment.api;
  project: Project;
  reached: number = 0;
  progress: number = 0;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getProject(this.projectid).subscribe((project) => {
      this.project = project;
      console.log(this.project);
      this.project.progress = this.calculateProjectProgress(this.project);
      this.progress = Number(this.project.progress.toFixed(0));
    });

    console.log(this.progress);
    // this.calculateFunds();
    // this.calculateProjectProgress();
  }
  public calculateProjectProgress(project) {
    this.calculateFunds(project);
    return this.project.raisedFunds / project.fundGoal;
  }

  public calculateFunds(project) {
    // var reached = Math.random() * 10000;
    var reached = 0;
    project.funders.forEach(funder => {
      reached += funder.amount;
    });
    this.project.raisedFunds = Number(reached.toFixed(2));
    console.log(this.project.raisedFunds);
    return reached;
  }

  public getTimeRemaining(date) {
    var t = Date.parse(date) - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
}
