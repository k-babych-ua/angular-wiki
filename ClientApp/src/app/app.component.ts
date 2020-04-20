import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-wiki';

  ngOnInit(): void {
    if (environment.production){
      environment.apiUrl = `${window.location.protocol}//${window.location.host}`;
    }
  }
}
