import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';
import { FormAnswers } from './formAnswers';
import {Http} from "@angular/http"
@Component({
  selector: 'app-social-status',
  templateUrl: './social-status.component.html',
  styleUrls: ['./social-status.component.css']
})
export class SocialStatusComponent implements OnInit {
  choices = ['Salarié du secteur privé','Retraité depuis moins de 5 ans',
  "En recherche d'emploi","Indépendant/Auto-entrepreneur","Dompteur de Shiba"
  ]
  formations = ['formation en tuluterie','formation en design des frey',
'homéopathie des shibas'];
checkboxDataList = [
  {
    id: 'tulut',
    label: 'Formation en tuluterie',
    isChecked: false
  },
  {
    id: 'frey',
    label: 'Formation en design des frey',
    isChecked: false
  },
  {
    id: 'shiba',
    label: "Homéopathie des shibas",
    isChecked: false
  }
  ];
  name : any ;
  phoneNumber : any ;
  email : any;
  socialStatus : any;
  formationChoices : string [] = [];
  constructor( private http : Http ) { 


  }
  private url = 'http://localhost:4201/'

  reroute : boolean = false;
  @Output() changeSocialStatus = new EventEmitter();
  onKeyup(variable : any){
    console.log(variable);
  }
  onLog(variable : any){
    console.log(variable)
  }
  createPost(){
    let post = {
      name : this.name,
      phoneNumber : this.phoneNumber,
      email : this.email,
      socialStatus : this.socialStatus,
    }
    this.http.post(this.url,JSON.stringify(post) );
  }
  onClick(){
    this.reroute = true;
    console.log("is clicked");


    this.changeSocialStatus.emit();

  }
  fetchSelectedItems(){
    let selections = this.checkboxDataList.filter( choice => choice.isChecked )
  ;
    this.formationChoices = selections.map( value => value.label)
}

  ngOnInit(): void {
  }
  
}
