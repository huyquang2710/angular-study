import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'angular-qlsv';


  show(interHTML: string) {
    let item = document.querySelector("#list");
    if(item) {
      item.innerHTML = interHTML;
    }
  }
}
