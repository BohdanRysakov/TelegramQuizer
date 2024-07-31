import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user-model';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})

export class StatCardComponent implements OnInit, OnChanges {

  @Input() user = new UserModel();
  @Input() isTop = true;
  @Input() place!: number;

  placeObj: { class: string; width: number; height: number } = { class: '', width: 0, height: 0 };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.updatePlaceObj();
  }

  private updatePlaceObj(): void {
    const placeMappings: Record<number, { class: string; width: number; height: number }> = {
      1: { class: 'place place_gold', width: 7, height: 7 },
      2: { class: 'place place_silver', width: 6, height: 6 },
      3: { class: 'place place_bronze', width: 5, height: 5 }
    };
  
    this.placeObj = placeMappings[this.place] || { class: '', width: 0, height: 0 };
  }


}
