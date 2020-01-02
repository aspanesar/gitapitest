import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gitapitest';
  apiUrl = "https://api.github.com/repos/aspanesar/gitapitest/comments"
  datalist = [];
  constructor( private http: HttpClient) {
  
	this.commitlist()
  } 
  
  httpOptionsfun(){
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        //'Access-Control-Allow-Origin': '*'
      })
    };
    return httpOptions
  }
  
  commitlist(){
    return this.http.get<any>(this.apiUrl, this.httpOptionsfun())
      .pipe(map(response => {
        console.log(response)
		this.datalist = response
      }));
  }
}
