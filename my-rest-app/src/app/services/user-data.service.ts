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
  async getUserData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
  async getUserDataById(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId).toPromise();
  }

  async updateUserDataById(id , dataPostTosend){
    const finalDataTosend = {
      id ,
      title: dataPostTosend.title ,
      userId: dataPostTosend.userId ,
      body: dataPostTosend.body

    };
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + id , finalDataTosend ).toPromise();
  }

  async createUserData( dataPostTosend){
    const responce = await this.http.post('https://jsonplaceholder.typicode.com/posts' , dataPostTosend ).toPromise();
  }

  async getAllUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users' ).toPromise();
   }

}
