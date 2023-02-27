import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostComment} from "../../interfaces/post.interface";
import {JsonPlaceholderService} from "../../services/json-placeholder.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  @Output() lastCommentDate: EventEmitter<Date> = new EventEmitter<Date>();

  comments!: PostComment[];

  constructor(private jsonPhService: JsonPlaceholderService) {
  }

  ngOnInit(): void {
    this.jsonPhService.getComments(this.postId).subscribe(comments => {
      this.comments = comments;
    });
  }

  onClick() {
    this.lastCommentDate.emit(new Date());
  }
  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
