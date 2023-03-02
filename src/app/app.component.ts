import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status: string = ''

  onClick() {
    console.log('clicked!')
    this.status = 'You pressed the button!'
  }
}
