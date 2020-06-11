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

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    console.log(params);
    });
    this.createFormControlsPostDetails();
    this.createFormGroupPostDetails();
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

      console.log(this.postGroupDetails);
      if (this.postGroupDetails.valid) {
      console.log('Form Submitted!');
      console.log(this.postGroupDetails.value);
      this.postGroupDetails.reset();
    }
  }


}
