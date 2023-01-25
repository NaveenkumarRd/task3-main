import { Component } from '@angular/core';
import { AppServices } from '../app.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  value: any;
  check : any= true ;
  childData: any;
  constructor(
    private route: ActivatedRoute,
    private appservices: AppServices
  ) {}

  

  ngOnInit() {
    console.log("photo init entered")
    this.value = this.route.snapshot.params['foo'];
    console.log(this.value);
    if (this.value != '') {
      this.appservices.fetchPhotoData(Number(this.value)).subscribe((data) => {
        this.childData = data;
      });
    } else {
      this.appservices.fetchPhotoData().subscribe((data) => {
        this.childData = data;
      });
    }
   
  }
  



}
