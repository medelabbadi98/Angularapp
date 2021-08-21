import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent implements OnInit {

  private url = 'http://localhost:4201/';
  constructor(private http : Http) { 
    http.get(this.url).subscribe(
      response => { console.log(response.json)}
    )
  }
  ngOnInit(): void {
  }

}
