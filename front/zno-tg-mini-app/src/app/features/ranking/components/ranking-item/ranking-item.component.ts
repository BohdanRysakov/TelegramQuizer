import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user-model';

@Component({
  selector: 'app-ranking-item',
  templateUrl: './ranking-item.component.html',
  styleUrls: ['./ranking-item.component.scss']
})
export class RankingItemComponent implements OnInit {

  @Input() user = new UserModel();

  constructor() { }

  ngOnInit() {
  }

} 