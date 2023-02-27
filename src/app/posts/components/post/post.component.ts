import {Component} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts = [
    {
      title: 'Post Uno',
      id: 1,
    },
    {
      title: 'Post Dos',
      id: 2,
    },
    {
      title: 'Post Tres',
      id: 3,
    },
    {
      title: 'Post Cuatro',
      id: 4,
    },
    {
      title: 'Post Cinco',
      id: 5,
    },
    {
      title: 'Post Seis',
      id: 6,
    },
    {
      title: 'Post Siete',
      id: 7,
    },
    {
      title: 'Post Ocho',
      id: 8,
    },
    {
      title: 'Post Nueve',
      id: 9,
    },
    {
      title: 'Post Diez',
      id: 10,
    }
  ];

  constructor() {
  }
}
