import {Component, OnInit} from '@angular/core';
import {Post} from "../../interfaces/post.interface";
import {JsonPlaceholderService} from "../../services/json-placeholder.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post!: Post;

  constructor(private jsonPhService: JsonPlaceholderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jsonPhService.getPost(params['id']).subscribe(post => {
        this.post = post;
      });
    });
  }

  public capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
