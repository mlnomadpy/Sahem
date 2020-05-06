import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Models/Content/Project';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  projectId: string;
  date: number;
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const c = document.getElementsByClassName("layout").length;
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log(this.projectId);
    console.log(c);
    /**
     * get project 
     */
    this.getProject();
    this.date = this.project.endDate.getDate() - Date.now();
    
  }

  async getProject() {
    const result = await this.getProjectById(this.projectId);
  }

  getProjectById(id) {
    const p = new Promise((res, rej) => {
      this.projectsService.getProject(id).subscribe(project => {
        this.project = project;
        console.log(this.project);
      });
      res('resolved');
    });
    return p;
  }

}
