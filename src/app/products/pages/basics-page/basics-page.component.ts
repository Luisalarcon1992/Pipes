import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public lowerCase: string = 'luis alarcon';
  public upperCase: string = 'LUIS ALARCON';
  public titleCase: string = 'lUis alARCon';

  public newDate : Date = new Date();
}
