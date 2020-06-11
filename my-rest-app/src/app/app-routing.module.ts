import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { ModuleWithProviders } from "@angular/core";


const routes: Routes = [  { path: "products", component: DisplayPostComponent },
{ path: "product/:id", component: PostDetailComponent },
{ path: "", component: DisplayPostComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
