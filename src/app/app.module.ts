import { PostComponent } from './post/post.component';
import { AppServices } from './app.services';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { CommentsComponent } from './comments/comments.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component:PostComponent,
    path: 'post',
  },
  {
    component: ChildComponent,
    path: 'child',
  },
  {
    component: PhotosComponent,
    path: 'photos',
  },
  {
    component: TodosComponent,
    path: 'todos',
  },
  {
    component: CommentsComponent,
    path : 'comments'
  },
  {
    component : AlbumsComponent,
    path: 'albums'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PhotosComponent,
    TodosComponent,
    AlbumsComponent,
    CommentsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
