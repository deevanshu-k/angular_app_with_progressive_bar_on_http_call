import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appwithprogressivebar';

  constructor(private http:HttpClient){
  }

  makeHttpCall(){
    this.http.get("https://jsonplaceholder.typicode.com/posts/?_delay=2000").subscribe(d => {
      console.log(d);
    })
  }
}
