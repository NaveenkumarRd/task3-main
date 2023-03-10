import { Component, Input } from '@angular/core';
import { AppServices } from '../app.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // @Input() data!: any[];

  value: any;
  check : any= true ;
  childData: any;
  constructor(
    private route: ActivatedRoute,
    private appservices: AppServices
  ) {}


  ngOnInit() {
    this.check = true
    console.log("user init entered")
    this.value = this.route.snapshot.params['foo'];
    console.log(this.value);
    if (this.value != '') {
      this.appservices.fetchDataSer(Number(this.value)).subscribe((data) => {
        this.childData = data;
      });
    } else {
      this.appservices.fetchDataSer().subscribe((data) => {
        this.childData = data;
      });
    }
   
  }
  



}
