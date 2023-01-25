import { Component, Input } from '@angular/core';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() data!: any[];
  str?: string;
  value?: any;
  httpdata: any;

  constructor(private appServices: AppServices) {}

  ngOnInit() {
    console.log(this.data);
  }
  getAbout(str?: string) {
    console.log(this.str);
  }
  getVal(val: any) {
    console.log('get val; enters');
    this.value = val;
    if (this.value != '') {
      this.appServices
        .fetchDataSer(Number(this.value))
        .subscribe((data: object) => {
          this.httpdata = data;
        });
    } else {
      this.appServices.fetchDataSer().subscribe((data: object) => {
        this.httpdata = data;
      });
    }
  }
}
