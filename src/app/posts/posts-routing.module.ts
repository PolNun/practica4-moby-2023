import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./components/post/post.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: ':id',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
