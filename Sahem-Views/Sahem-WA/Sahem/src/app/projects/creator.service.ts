
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

import { environment } from 'src/environments/environment';

import { Project } from '../Models/Content/Project';
import { Loc8rDataService } from '../loc8r-data.service';
import { BROWSER_STORAGE } from '../Models/storage';
import { Creator } from '../Models/User/Creator';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'null'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CreatorService {
  api: string = environment.api;
  url: string;
  config: any;
  // private handleError: HandleError;
  creatorUrl: string = '/api/creators';

  /**
   * Constructor
   * @param httpClient 
   * 
   */

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private httpClient: HttpClient) {
    // this.handleError = httpErrorHandler.createHandleError('ProjectsService');
    // this.setHeaderAuthToken();
  }

  public setHeaderAuthToken() {
    const token = this.storage.getItem('loc8r-token');
    if (token)
      httpOptions.headers.append('Authorization', 'bearer ' + token);
  }

  /**
   * a function to get the Projects from the api
   * @returns Projects[]
   */


  /**
   * Get request the Project by id from the api
   * @param id 
   */
  getCreator(id: string): Observable<Creator> {
    this.url = this.api + this.creatorUrl;

    return this.httpClient.get<Creator>(this.url + '/' + id);
  }
  /**
   * send a post request to the api with the object Project
   * in order to create the object
   * @param Project 
   * 
   */



  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}