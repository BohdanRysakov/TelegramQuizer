import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user-model';import { RankingOptions } from '../../enums/ranking-options.enum';

@Component({
  selector: 'app-ranking-top',
  templateUrl: './ranking-top.component.html',
  styleUrls: ['./ranking-top.component.scss']
})
export class RankingTopComponent implements OnInit {

  @Input() user = new UserModel();
  @Input() topAllThreeLeaders: UserModel[] = [];
  @Input() topWeekThreeLeaders: UserModel[] = [];
  @Input() topMonthThreeLeaders: UserModel[] = [];

  @Input() selectedTop: RankingOptions = RankingOptions.TOTAL;

  constructor() { }

  ngOnInit() {
  }

  selectedTopLeader(index: number) {
    switch (this.selectedTop) {
      case RankingOptions.TOTAL:
        return this.topAllThreeLeaders[index];
      case RankingOptions.WEEKLY:
        return this.topWeekThreeLeaders[index];
      case RankingOptions.MONTHLY:
        return this.topMonthThreeLeaders[index];
      default: return new UserModel();
    }
  }

}
