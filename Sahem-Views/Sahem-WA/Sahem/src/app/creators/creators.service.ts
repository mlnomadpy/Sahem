import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

import { environment } from 'src/environments/environment';

import { Creator } from '../Models/User/Creator';
import { BROWSER_STORAGE } from '../Models/storage';
import { Loc8rDataService } from '../loc8r-data.service';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/json',
    'Authorization': 'bearer ' + localStorage.getItem('loc8r-token')
  })
};

@Injectable({ providedIn: 'root' })
export class CreatorsService {
  api: string = environment.api;
  url: string;
  private handleError: HandleError;
  creatorUrl: string = '/api/creators';

  /**
   * Constructor
   * @param httpClient 
   * 
   */
  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private loc8rDataService: Loc8rDataService, private httpClient: HttpClient) {

    // this.handleError = httpErrorHandler.createHandleError('CreatorsService');
    // this.setHeaderAuthToken();
  }

  public setHeaderAuthToken() {
    const token = this.storage.getItem('loc8r-token');
    if (token)
      httpOptions.headers.append('Authorization', 'bearer ' + token);
  }
  /**
   * a function to get the Creators from the api
   * @returns Creators[]
   */
  getCreators(): Observable<Creator[]> {
    this.url = this.api + this.creatorUrl;


    return this.httpClient.get<Creator[]>(this.url);
  }

  /**
   * Get request the Creator by id from the api
   * @param id 
   */
  getCreator(id: string): Observable<Creator> {
    this.url = this.api + this.creatorUrl;
    // const token = this.storage.getItem('loc8r-token');
    // const bearerToken = 'BEARER ' + token;
    // httpOptions.headers.append('Authorization', bearerToken);

    return this.httpClient.get<Creator>(this.url + id);
  }
  /**
   * 
   * @param creator 
   */
  async getCreatorProfile(): Promise<Observable<any>> {
    this.url = this.api + this.creatorUrl;
    const token = await this.storage.getItem('loc8r-token');
    const bearerToken = 'bearer ' + token;

    console.log(bearerToken);
    httpOptions.headers.set('authorization', bearerToken);
    console.log(httpOptions.headers);
    return this.httpClient.post<any>(this.api + '/api/profile', null, httpOptions);
  }
  /**
   * send a post request to the api with the object Creator
   * in order to create the object
   * @param Creator 
   * 
   */
  createCreator(formDate): Observable<any> {
    return this.httpClient.post<any>(this.url, formDate, httpOptions)
      .pipe(
        // catchError(this.handleError('createCreator', creator))
        catchError(this.error)

      );
  }
  updateCreator(creator: Creator): Observable<Creator> {
    return this.httpClient.put<Creator>(this.url + '/profile', creator, httpOptions);
  }
  deleteCreator(): Observable<Creator> {
    return this.httpClient.delete<Creator>(this.url + '/profile', httpOptions);
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