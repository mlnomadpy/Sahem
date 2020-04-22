import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

import { environment } from 'src/environments/environment';

import { Creator } from '../Models/User/Creator';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'null'
  })
};

@Injectable({ providedIn: 'root' })
export class CreatorsService {
  api: string = environment.api;
  url: string;
  private handleError: HandleError;
  creatorUrl: string = '/api/Creators';

  /**
   * Constructor
   * @param httpClient 
   * 
   */
  constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CreatorsService');
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
    return this.httpClient.get<Creator>(this.url + id);
  }
  /**
   * send a post request to the api with the object Creator
   * in order to create the object
   * @param Creator 
   * 
   */
  createCreator(creator: Creator): Observable<Creator> {
    return this.httpClient.post<Creator>(this.url, creator, httpOptions)
      .pipe(
        catchError(this.handleError('createCreator', creator))
      );
  }
  updateCreator(creator: Creator): Observable<Creator> {
    return this.httpClient.put<Creator>(this.url + creator._id, creator, httpOptions);
  }
  deleteCreator(creatorid): Observable<Creator> {
    return this.httpClient.delete<Creator>(this.url + creatorid, httpOptions);
  }

}