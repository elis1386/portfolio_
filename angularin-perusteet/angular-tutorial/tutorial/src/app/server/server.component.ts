import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  imgUrl =
  'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fangular.io%2Fassets%2Fimages%2Flogos%2Fangular%2Fangular.png&sp=1674042196T0ac3dcf3762dfa956751e2c426c4478059575acff0c2259432e630db9c3da2c5';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl =
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F2300px-React-icon.svg.png&sp=1674042228T595b41cb3292500594c0a6a8da60da3de491bcab67896e6ca5e4569bfdcd6bca';
    }, 5000);
  }
  getInfo(): string {
    return 'In this components we change the logo after 2 sec';
  }

}
