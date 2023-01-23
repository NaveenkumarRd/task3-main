import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppServices{
    httpdata: any;
    constructor(private http: HttpClient) { }
    fetchDataSer(param?: number){
        if(param)
            return this.http.get("https://jsonplaceholder.typicode.com/users?id="+param);
        return this.http.get("https://jsonplaceholder.typicode.com/users");
        }
}