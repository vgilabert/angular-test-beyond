import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  @Input()
  ngStyle: { [klass: string]: any };

  public words: any[] = [
    {
      text: 'Naruto',
      count: '86'
    },
    {
      text: 'Miyazaki',
      count: '38'
    }
  ];

  constructor() {}

  ngOnInit() {
    let bubbles: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'bubble'
    );
  }
}
