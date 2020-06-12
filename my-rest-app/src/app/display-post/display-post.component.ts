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
  public dataToDisplayWithName: any;
  public listOfusers: any ;

  constructor( public userData: UserDataService , private router: Router) {
   this.dataToDisplay = [];
   this.dataToDisplayWithName = [];
  }

  async ngOnInit(){
  this.dataToDisplay = await this.userData.getUserData();
  this.listOfusers = await this.userData.getAllUser();
  this.addNameTolistOfPost();
  this.dataToDisplayWithName = this.addNameTolistOfPost();
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

 addNameTolistOfPost(){
   const listwithName = [];
   this.dataToDisplay.forEach((data , index) => {
    const userFiltred = this.listOfusers.find((user: any) => user.id === data.userId);
    listwithName.push({ id: data.id ,   userId: data.userId , title: data.title ,  name: userFiltred.name} );
  });
   return listwithName;
}
}
