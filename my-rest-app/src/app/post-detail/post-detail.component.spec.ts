import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormControl } from '@angular/forms';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user name is required', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('userId').valid).toEqual(false);
    formControlPost.get('userId').setValue('ishak mohamed');
    expect(formControlPost.get('userId').valid).toEqual(true);
  });

  it('title is required', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('title').valid).toEqual(false);
    formControlPost.get('title').setValue('title test');
    expect(formControlPost.get('title').valid).toEqual(true);
  });

  it('test title minLength = 5 ', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('title').valid).toEqual(false);
    formControlPost.get('title').setValue('ishak mohamed');
    expect(formControlPost.get('title').valid).toEqual(true);
  });

});
