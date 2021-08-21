import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rights-reading',
  templateUrl: './rights-reading.component.html',
  styleUrls: ['./rights-reading.component.css']
})
export class RightsReadingComponent implements OnInit {

  reroute : boolean = false;
  @Output() changeRights = new EventEmitter();
  onClick(){
    this.reroute = true;
    this.changeRights.emit();

  }
  constructor() { }

  ngOnInit(): void {
  }
}
