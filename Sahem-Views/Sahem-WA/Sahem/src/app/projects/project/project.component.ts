import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Models/Content/Project';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  api: string = environment.api;
  project: Project;
  projectId: string;
  date: any;
  progress: any;
  reached: any;
  isLoggedIn: boolean;
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();

    const c = document.getElementsByClassName("layout").length;
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log(this.projectId);
    console.log(c);
    /**
     * get project 
     */
    this.getProject();
    // this.date = this.project.endDate.getDate() - Date.now();

  }

  async getProject() {
    const result = await this.getProjectById(this.projectId);
  }

  getProjectById(id) {
    const p = new Promise((res, rej) => {
      this.projectsService.getProject(id).subscribe(project => {
        this.project = project;
        this.date = this.getTimeRemaining(this.project.endDate);
        this.progress = this.calculateProjectProgress(this.project);
        console.log(this.project);
      });
      res('resolved');
    });
    return p;
  }

  public calculateProjectProgress(project) {
    return this.calculateFunds(project) / project.fundGoal;
  }
  public calculateFunds(project) {
    var reached = 0;
    project.funders.forEach(funder => {
      reached += funder.amount;
    });
    // var reached = Math.random() * 10000;
    // project.funds.forEach(fund => {
    //   reached += fund.amount;
    // });
    // this.project.raisedFunds = Number(reached.toFixed(2));
    this.project.raisedFunds = reached;
    console.log(this.date);
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
