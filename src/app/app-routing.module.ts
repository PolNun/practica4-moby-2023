import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from "./error404/error404.component";

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
