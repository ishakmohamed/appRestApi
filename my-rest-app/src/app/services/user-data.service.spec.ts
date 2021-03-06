import { TestBed } from '@angular/core/testing';
import { UserDataService } from './user-data.service';
import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
} from '@angular/common/http';

describe('SsotDataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      imports: [HttpClientModule],
    }),
  );

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });
});