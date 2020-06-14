import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule, HttpClientModule],
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

  it('body is required', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('body').valid).toEqual(false);
    formControlPost.get('body').setValue('bodyvalue');
    expect(formControlPost.get('body').valid).toEqual(true);
  });

  it('title is required', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('title').valid).toEqual(false);
    formControlPost.get('title').setValue('title test');
    expect(formControlPost.get('title').valid).toEqual(true);
  });

  it('test title minLength < 5 ', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('title').valid).toEqual(false);
    formControlPost.get('title').setValue('1234');
    expect(formControlPost.get('title').valid).toEqual(false);
  });

  it('test title maxLength > 100 ', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('title').valid).toEqual(false);
    formControlPost.get('title').setValue('https://www.google.com/search?rlz=1C1GCEA_enCA880CA880&sxsrf=ALeKk03oZiTyv37-VrAWCgAv5SyU5khYeA%3A1592078848965&ei=ADLl');
    expect(formControlPost.get('title').valid).toEqual(false);
  });

  it('test title length between 5 and 100 ', () => {
    const  formControlPost = component.postGroupDetails;
    expect(formControlPost.get('title').valid).toEqual(false);
    formControlPost.get('title').setValue('1234567');
    expect(formControlPost.get('title').valid).toEqual(true);
  });

});
