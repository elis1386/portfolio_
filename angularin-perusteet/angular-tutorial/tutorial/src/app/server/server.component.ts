import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  imgUrl =
  'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fangular.io%2Fassets%2Fimages%2Flogos%2Fangular%2Fangular.png&sp=1669892319T4b73f511e450af2834e8522fea19ef1d4add33a5ef4aea41e43f9050447c87d2';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl =
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-512.png&sp=1669892366T5e4c1d922f6035a723e465caa0ce277d15c464e5f977150ad6147a37321239f8';
    }, 2000);
  }
  getInfo(): string {
    return 'In this components we change the logo after 2 sec';
  }

}
