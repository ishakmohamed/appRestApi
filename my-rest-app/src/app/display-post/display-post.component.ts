import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss']
})
export class DisplayPostComponent implements OnInit {
  private dataToDisplay: any ;

  constructor( public userData: UserDataService) {
   this.dataToDisplay = [];
  }

  async ngOnInit(){
  this.dataToDisplay = await this.userData.getUserData();
  console.log('test',this.dataToDisplay);

  }

}
