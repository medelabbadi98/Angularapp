import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leads-form';
  pageNumber : number = 0;
  onChange(){
    this.pageNumber +=1 ;
    console.log(this.pageNumber);

  }

}
