import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Post} from "../interfaces/post.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }
}
