import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  private words: any = [
    {
      str: 'Naruto',
      nb: '86'
    },
    {
      str: 'Miyazaki',
      nb: '38'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
