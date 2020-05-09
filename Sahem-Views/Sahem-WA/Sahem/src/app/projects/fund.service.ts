

import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

import { environment } from 'src/environments/environment';

import { Loc8rDataService } from '../loc8r-data.service';
import { BROWSER_STORAGE } from '../Models/storage';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': 'null'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FundService {
  api: string = environment.api;
  url: string;
  config: any;
  // private handleError: HandleError;
  projectUrl: string = '/api/Projects';

  /**
   * Constructor
   * @param httpClient 
   * 
   */

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private httpClient: HttpClient) {
    // this.handleError = httpErrorHandler.createHandleError('ProjectsService');
  }

  public setHeaderAuthToken() {
    const token = this.storage.getItem('loc8r-token');
    const bearerToken = 'BEARER ' + token;
    // if (token)
    httpOptions.headers.append('authorization', bearerToken);
    console.log(bearerToken);
  }



  fundCharge(formData: FormData, id: string): Observable<any> {
    // this.setHeaderAuthToken();
    
    const token = this.storage.getItem('loc8r-token');
    const bearerToken = 'BEARER ' + token;
    httpOptions.headers = httpOptions.headers.set('Authorization', bearerToken);

    console.log(httpOptions.headers);
    this.url = this.api + this.projectUrl + '/' + id + '/fund';
    console.log(this.url);
    return this.httpClient.post<any>(this.url, formData, httpOptions)
      .pipe(
        catchError(this.error)
      );
  }


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