import {Component} from '@angular/core';
import {Post} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: Post[] = [
    {
      title: 'Post Uno',
      id: 1,
      body: 'hola, soy el post uno',
      author: 'Juan',
      date: Date.now().toString()
    },
    {
      title: 'Post Dos',
      id: 2,
      body: 'hola, soy el post dos',
      author: 'Pablo',
      date: Date.now().toString()
    },
    {
      title: 'Post Tres',
      id: 3,
      body: 'hola, soy el post tres',
      author: 'Pedro',
      date: Date.now().toString()
    },
    {
      title: 'Post Cuatro',
      id: 4,
      body: 'hola, soy el post cuatro',
      date: Date.now().toString()
    },
    {
      title: 'Post Cinco',
      id: 5,
      body: 'hola, soy el post cinco',
      date: Date.now().toString()
    },
    {
      title: 'Post Seis',
      id: 6,
      body: 'hola, soy el post seis',
      date: Date.now().toString()
    },
    {
      title: 'Post Siete',
      id: 7,
      body: 'hola, soy el post siete',
      date: Date.now().toString()
    },
    {
      title: 'Post Ocho',
      id: 8,
      body: 'hola, soy el post ocho',
      date: Date.now().toString()
    },
    {
      title: 'Post Nueve',
      id: 9,
      body: 'hola, soy el post nueve',
      date: Date.now().toString()
    },
    {
      title: 'Post Diez',
      id: 10,
      body: 'hola, soy el post diez',
      date: Date.now().toString()
    }
  ];

  constructor() {
  }
}
