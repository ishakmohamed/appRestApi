import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPostComponent } from './display-post.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DisplayPostComponent', () => {
  let component: DisplayPostComponent;
  let fixture: ComponentFixture<DisplayPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPostComponent ],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
