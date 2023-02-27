import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostComponent} from './components/post/post.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LettercasePipe } from './pipes/lettercase.pipe';


@NgModule({
  declarations: [
    PostComponent,
    PostDetailComponent,
    CommentsComponent,
    LettercasePipe
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule {
}
