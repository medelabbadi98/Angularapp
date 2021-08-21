import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reroute : boolean = false;
  @Output() changeHome = new EventEmitter();
  onClick(){
    this.reroute = true;
    this.changeHome.emit();

  }
  constructor() { }

  ngOnInit(): void {
  }

}
