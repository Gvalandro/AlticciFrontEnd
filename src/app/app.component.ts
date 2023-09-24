import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = '';
  sequence = [];
  nValue = '';

  constructor(private appService: AppService) {}

  onSubmit() {
    this.appService.getSequence(this.value).subscribe((data) => {
      console.log(data);
      this.sequence = data.sequence;
      this.nValue = data.value;
      this.value = '';
    }, (error) => console.log(error));
  }
}