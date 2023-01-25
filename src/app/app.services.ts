import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppServices {
  httpdata: any;
  constructor(private http: HttpClient) {}
  fetchDataSer(param?: number) {
    if (param)
      return this.http.get('https://jsonplaceholder.typicode.com/users?id=' + param);
    else 
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  fetchCommentData(param?: number) {
    if (param)
      return this.http.get('https://jsonplaceholder.typicode.com/comments?id=' + param);
    else 
      return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  fetchPhotoData(param?: number) {
    if (param)
      return this.http.get('https://jsonplaceholder.typicode.com/photos?id=' + param);
    else 
      return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  fetchTodoData(param?: number) {
    if (param)
      return this.http.get('https://jsonplaceholder.typicode.com/todos?id=' + param);
    else 
      return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  fetchPostData(param?: number) {
    if (param)
      return this.http.get('https://jsonplaceholder.typicode.com/posts?id=' + param);
    else 
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  fetchAlbumData(param?: number) {
    if (param)
      return this.http.get('https://jsonplaceholder.typicode.com/albums?id=' + param);
    else 
      return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

}
