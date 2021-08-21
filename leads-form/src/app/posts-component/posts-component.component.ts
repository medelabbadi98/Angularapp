import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http : Http) { 
    http.get(this.url).subscribe(
      response => { console.log(response.json):}
    )
  }
  createPost(titleInput : HTMLInputElement){
    let post = {title : titleInput.value}
    this.http.post(this.url,JSON.stringify(post) );
  }

  ngOnInit(): void {
  }

}
