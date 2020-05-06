import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css'],
  providers: [ProjectsService]
})
export class ProjectsViewComponent implements OnInit {
  projects: any;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects() {
    const p = new Promise((res, rej) => {
      this.projectService.getProjects().subscribe(projects => {
        this.projects = projects;
        console.log(this.projects)
      });
      res('resolved');
    });
    return p;
  }

}
