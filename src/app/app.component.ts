import { Component } from '@angular/core';
import { Photo } from './photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  photoAssets: Array<Photo> = [
    {
      src: '/assets/img/1e579dc7b341e6ebf7ab757a691afdb5.jpg',
      title: 'Girl 1'
    },
    {
      src: '/assets/img/2d9293c2ae945a12a00bbfb5dfe94ac8.jpg',
      title: 'Girl 2'
    },
    {
      src: '/assets/img/15e719a751335f067b67d2c56f87919b.jpg',
      title: 'Girl 3'
    },
    {
      src: '/assets/img/97b4abf05f8827310fa15904bebd3301_093a92b6abed027f28edc3273b8556-pirate-cat-head-fishbone-body-clipart_300-470.jpeg',
      title: 'Guy 1'
    }
  ];
}