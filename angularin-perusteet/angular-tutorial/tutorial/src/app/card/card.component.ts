import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  title = 'My card title';
  text = 'Some text for paragraph';

  imgUrl =
    'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.tiitus.fi%2Fwp-content%2Fuploads%2F2019%2F09%2FBC-logo-viininpunainen.png&sp=1669723608Tc4bdde1a140ab417671cd9faa89ef31676a9247be3e2383c87f15d1ae965ea71';

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl =
        'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fintra.bc.fi%2FBC-logo-beige.png&sp=1669724218T63f4f4a6d45357a94e4d263a71d3ad0a04cd10791cc329eb7af2c7f003b56042';
    }, 2000);
  }
  getInfo(): string {
    return 'This is info about some card';
  }
  changeTitle()
  {
    this.title = 'Title was changed'
  }

  onInput(event: any) {
    const value = event.target.value
    this.title = value
}
}
