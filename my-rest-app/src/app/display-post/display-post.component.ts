import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss']
})
export class DisplayPostComponent implements OnInit {

  constructor( public userData: UserDataService) { }

  async ngOnInit(){

  const userToDisplay = await this.userData.getUserData();
  console.log(userToDisplay);
  }

}
