import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mvl-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() image;
  @Input() alt: string;

  constructor() { }

  ngOnInit() {
  }

  getThumbnailUrl() {
    return `${this.getThumbnailPathWithoutProtocol()}.${this.image.extension}`;
  }

  getThumbnailPathWithoutProtocol() {
    return this.image.path.replace(/^https?:/, '');
  }
}
