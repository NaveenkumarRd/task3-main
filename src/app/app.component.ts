import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';
  httpdata:any;
  value!: any ;
  currVal : any
  constructor(private activatedRouter: ActivatedRoute, private router:Router){}
    
  updateCurrVal(val:any){
    this.currVal = val
  }

  
  navigate(){
    this.router.navigate(['/']).then(()=>{
      this.router.navigate(["/",this.currVal, {foo:this.value}])
    })
  }


}