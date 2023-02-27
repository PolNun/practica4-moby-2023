import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostComponent} from './components/post/post.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';


@NgModule({
  declarations: [
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule {
}
