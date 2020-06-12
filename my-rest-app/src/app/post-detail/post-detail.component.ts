import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  postGroupDetails: FormGroup;
  title: FormControl;
  userId: FormControl;
  body: FormControl;
  idOfUser: string ;
  isPostUpdate: boolean;
  listOfuser: any ;
  allUsers: any;
  constructor( private route: ActivatedRoute, public userDataService: UserDataService) {
    this.isPostUpdate = false ;
    this.listOfuser = {};
  }

   ngOnInit(): void {
    this.route.params.subscribe(params => {
    console.log(params);
    if (params && params.id){
      this.idOfUser = params.id;
      this.isPostUpdate = true ;
    }
    });
    this.createFormControlsPostDetails();
    this.createFormGroupPostDetails();
    this.getAllUser();
  }

  createFormControlsPostDetails() {
    this.userId = new FormControl('', Validators.required);
    this.body = new FormControl('', Validators.required);
    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]);
  }

  createFormGroupPostDetails() {
    this.postGroupDetails = new FormGroup({
      userId: this.userId,
      title: this.title,
      body: this.body
    });
  }

    onSubmit() {
      if (this.postGroupDetails.valid) {
        this.createNewPost();
        this.postGroupDetails.reset();
    }
  }

  async createNewPost(){
    console.log(this.postGroupDetails.value);
    await this.userDataService.createUserData(this.postGroupDetails.value);
  }
  async getAllUser(){
  this.allUsers = await this.userDataService.getAllUser();
  }
}
