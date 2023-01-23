import { Component } from '@angular/core';
import { AppServices } from './app.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appServices: AppServices){}
  title = 'task3';
  httpdata:any;
  value!: any ;
  
  getVal(val: any){
    this.value = val;
    if(this.value != ''){
      this.appServices.fetchDataSer(Number(this.value)).subscribe((data: object)=>{
        this.httpdata = data;})
    
      }
      else{
        this.appServices.fetchDataSer().subscribe((data: object)=>{
          this.httpdata = data;})
          
      }
      }
  
   ngOnInit(){
    this.appServices.fetchDataSer(Number()).subscribe((data: object)=>{
      this.httpdata = data;})
      // console.log(this.httpdata);
    
  } 
}