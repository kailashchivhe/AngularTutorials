import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kailash';
  toUpper(){
    this.title = this.title.toUpperCase()
  }
  toLower(){
    this.title = this.title.toLowerCase()
  }
}
