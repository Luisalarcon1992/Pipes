import { Component } from '@angular/core';

@Component({
  selector: 'products-date-pipe',
  templateUrl: './date-pipe.component.html',
  styles: [
  ]
})
export class DatePipeComponent {


  public dateNow: Date;

  constructor() {
    this.dateNow = new Date()
  }
}
