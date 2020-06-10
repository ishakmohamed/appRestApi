import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {
  }

/**
 * return all data of user 
 */
  async getUserData( ) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

}
