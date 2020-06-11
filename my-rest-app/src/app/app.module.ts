import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { UserDataService } from './services/user-data.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
