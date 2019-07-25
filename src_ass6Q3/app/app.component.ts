import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <h2>Marvellous Infosystems</h2>
</div>`,
  styles: [`h2{
    color:blue
}`]
})
export class AppComponent {
  title = 'AngularTutorials';
}
