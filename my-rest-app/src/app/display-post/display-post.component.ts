import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss']
})
export class DisplayPostComponent implements OnInit {
  public dataToDisplay: any ;

  constructor( public userData: UserDataService , private router: Router) {
   this.dataToDisplay = [];
  }

  async ngOnInit(){
  this.dataToDisplay = await this.userData.getUserData();
  console.log('test', this.dataToDisplay);
 }

 selectPost(url , postId){
  const  myurl = `${url}/${postId}`;
  this.router.navigateByUrl(myurl).then(e => {
    if (e) {
      console.log('Navigation is successful!');
    } else {
      console.log('Navigation has failed!');
    }
  });

 }

}
