import { Component } from '@angular/core';
import { AppServices } from '../app.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  value: any;
  check : any= true ;
  childData: any;
  constructor(
    private route: ActivatedRoute,
    private appservices: AppServices
  ) {}

  
getW(){
  console.log("getW entered")
}  

  ngOnInit() {
    this.check = true
    console.log("comment init entered")
    this.value = this.route.snapshot.params['foo'];
    console.log(this.value);
    if (this.value != '') {
      this.appservices.fetchCommentData(Number(this.value)).subscribe((data) => {
        this.childData = data;
      });
    } else {
      this.appservices.fetchCommentData().subscribe((data) => {
        this.childData = data;
      });
    }
   
  }
  



}
