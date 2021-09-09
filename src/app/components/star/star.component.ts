import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input()
  rating: number = 0;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    console.log("ngOnInit");
    this.rating = 0;
  }
  rate() {
    console.log("rating!!")
    this.ratingClicked.emit(`Rating: ${this.rating}`);
  }
}
