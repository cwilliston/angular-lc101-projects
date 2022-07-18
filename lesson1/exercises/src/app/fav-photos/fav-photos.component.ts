import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here\'s some pics, yo!';
  image1 = 'https://www.penguinrandomhouse.ca/sites/default/files/2019-11/GENERAL%20header.jpg';
  image2 = 'https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg';
  image3 = 'https://www.denofgeek.com/wp-content/uploads/2020/05/star-wars-ahsoka.jpg?resize=768%2C432';

  constructor() { }

  ngOnInit() {
  }

}