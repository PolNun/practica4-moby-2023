import {Component, OnInit} from '@angular/core';
import {Post} from "../../interfaces/post.interface";
import {JsonPlaceholderService} from "../../services/json-placeholder.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private jsonPhService: JsonPlaceholderService) {
  }

  ngOnInit(): void {
    this.jsonPhService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
