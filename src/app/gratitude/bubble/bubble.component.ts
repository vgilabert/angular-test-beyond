import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
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
    for (let i = 0; i < this.words.length; i++) {
      document.getElementById('gratitude').innerHTML +=
        "<div class='bubble' *ngFor='let word of words'><span class='text" +
        i +
        "'>{{word.text}}</span></div>";
    }
  }
}
