import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

import { environment } from 'src/environments/environment';

import { Project } from '../Models/Content/Project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'null'
  })
};

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  api: string = environment.api;
  url: string;
  config: any;
  private handleError: HandleError;
  projectUrl: string = '/api/Projects';

  /**
   * Constructor
   * @param httpClient 
   * 
   */
  constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /**
   * a function to get the Projects from the api
   * @returns Projects[]
   */
  getProjects(): Observable<Project[]> {
    this.url = this.api + this.projectUrl;


    return this.httpClient.get<Project[]>(this.url);
  }

  /**
   * Get request the Project by id from the api
   * @param id 
   */
  getProject(id: string): Observable<Project> {
    return this.httpClient.get<Project>(this.url + id);
  }
  /**
   * send a post request to the api with the object Project
   * in order to create the object
   * @param Project 
   * 
   */
  createProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.url, project, httpOptions)
      .pipe(
        catchError(this.handleError('createProject', project))
      );
  }
  updateProject(project: Project): Observable<Project> {
    return this.httpClient.put<Project>(this.url + project._id, project, httpOptions);
  }
  deleteProject(projectid): Observable<Project> {
    return this.httpClient.delete<Project>(this.url + projectid, httpOptions);
  }


  getCreatorByCategory(category: string) {
    //TODO add a route that get the Project by category
    this.url = this.api + '/api/Project/' + category;


    return this.httpClient.get<Project[]>(this.url);
  }
}