import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  postUrl: string;
  getUrl: string;
  constructor(private http: HttpClient) {
  this.postUrl = environment.postUrl ;
  this.getUrl = environment.getUrl;
  }

/**
 * return all data of user
 */
  async getUserData() {
    return this.http.get(this.postUrl).toPromise();
  }
  async getUserDataById(userId){
    return this.http.get(this.postUrl + '?userId=' + userId).toPromise();
  }

  async updateUserDataById(id , dataPostTosend){
    const finalDataTosend = {
      id ,
      title: dataPostTosend.title ,
      userId: dataPostTosend.userId ,
      body: dataPostTosend.body

    };
    return this.http.put(this.postUrl + '/' + id , finalDataTosend ).toPromise();
  }

  async createUserData( dataPostTosend){
     await this.http.post(this.postUrl , dataPostTosend ).toPromise();
  }

  async getAllUser(){
    return this.http.get(this.getUrl ).toPromise();
   }

}
