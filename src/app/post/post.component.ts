import { Component } from '@angular/core';
import { AppServices } from '../app.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  value: any;
  check : any= true ;
  childData: any;
  constructor(
    private route: ActivatedRoute,
    private appservices: AppServices
  ) {}

  

  ngOnInit() {
    this.check = true
    console.log("album init entered")
    this.value = this.route.snapshot.params['foo'];
    console.log(this.value);
    if (this.value != '') {
      this.appservices.fetchAlbumData(Number(this.value)).subscribe((data) => {
        this.childData = data;
      });
    } else {
      this.appservices.fetchAlbumData().subscribe((data) => {
        this.childData = data;
      });
    }
   
  }
  

}
