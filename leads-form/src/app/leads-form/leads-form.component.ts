import { Component, OnInit } from '@angular/core';
import { Leads } from './leads';
@Component({
  selector: 'app-leads-form',
  templateUrl: './leads-form.component.html',
  styleUrls: ['./leads-form.component.css']
})
export class LeadsFormComponent implements OnInit {
  lead = new Leads("...",1,"...",10)
  formations = ['formation en tuluterie','formation en design des frey']
  submitted = false;
  constructor(
    ) { }
  goToLink(url: string){
      window.open(url);
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
  }

}
