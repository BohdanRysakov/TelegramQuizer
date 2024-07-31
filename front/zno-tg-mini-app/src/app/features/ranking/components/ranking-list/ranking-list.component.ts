import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user-model';import { RankingOptions } from '../../enums/ranking-options.enum';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss'],
})
export class RankingListComponent implements OnInit {
  
  @Input() allLeaderboard: UserModel[] = [];
  @Input() weekLeaderboard: UserModel[] = [];
  @Input() monthLeaderboard: UserModel[] = [];

  selectedBoard:RankingOptions = RankingOptions.TOTAL;
  RankingOptions = RankingOptions;

  mockUsers = [
    new UserModel(),
     new UserModel(), 
    new UserModel(),
     new UserModel(), 
    new UserModel(),
     new UserModel(), 
    new UserModel(),
     new UserModel(), 
    new UserModel(),
     new UserModel(), 
     new UserModel()
    ];

  users() {
    switch(this.selectedBoard) {
      case RankingOptions.TOTAL:
        return this.allLeaderboard;
      case RankingOptions.WEEKLY:
        return this.weekLeaderboard;
      case RankingOptions.MONTHLY:
        return this.monthLeaderboard;
      default: return this.mockUsers;
    }
  }

  constructor() {}

  ngOnInit() {}

  isSelected(option: RankingOptions) {
    return this.selectedBoard === option;
  }

  setOption(option: RankingOptions) {
    this.selectedBoard = option;
  }
}
