import { Component, OnInit, inject } from '@angular/core';
import { RankingService } from '../../services/ranking.service';
import { EMPTY, catchError, finalize, forkJoin, map, Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user-model';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent implements OnInit {
  private rankingService = inject(RankingService);

  allLeaderboard: UserModel[] = [];
  weekLeaderboard: UserModel[] = [];
  monthLeaderboard: UserModel[] = [];

  topAllThreeLeaders: UserModel[] = [];
  topWeekThreeLeaders: UserModel[] = [];
  topMonthThreeLeaders: UserModel[] = [];

  user = new UserModel();
  isLoading = false;
  private startId = 0;

  ngOnInit() {
    this.getLeaderboards();
  }

  private getLeaderboards() {
    this.isLoading = true;

    const leaderboardRequests = [
      this.getLeaderboardData(this.rankingService.getAllLeaderboard()),
      this.getLeaderboardData(this.rankingService.getWeekLeaderboard()),
      this.getLeaderboardData(this.rankingService.getMonthLeaderboard())
    ];

    forkJoin(leaderboardRequests).subscribe(
      ([allLeaderboard, weekLeaderboard, monthLeaderboard]) => {
        this.updateLeaderboards({ allLeaderboard, weekLeaderboard, monthLeaderboard });
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.handleError();
      }
    );
  }

  private getLeaderboardData(leaderboard$: Observable<UserModel[]>) {
    return leaderboard$.pipe(
      catchError(() => this.handleError()),
      map((data) => this.assignRanks(data)),
      finalize(() => this.startId = 0)
    );
  }

  private assignRanks(data: UserModel[]): UserModel[] {
    return data.map((user) => ({ ...user, userRank: this.idGenerator().next().value } as UserModel));
  }

  private updateLeaderboards(payload: { allLeaderboard: UserModel[], weekLeaderboard: UserModel[], monthLeaderboard: UserModel[] }) {
    this.allLeaderboard = payload.allLeaderboard;
    this.weekLeaderboard = payload.weekLeaderboard;
    this.monthLeaderboard = payload.monthLeaderboard;

    this.topAllThreeLeaders = this.allLeaderboard.slice(0, 3);
    this.topWeekThreeLeaders = this.weekLeaderboard.slice(0, 3);
    this.topMonthThreeLeaders = this.monthLeaderboard.slice(0, 3);
  }

  private handleError() {
    return EMPTY;
  }

  private *idGenerator() {
    let id = this.startId;
    while (true) {
      yield ++id;
    }
  }
}
