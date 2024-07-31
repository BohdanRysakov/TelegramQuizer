import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TelegramService } from './telegram.service';
import { UserData } from '../models/userData.model';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

interface AuthData {
  "accessToken": string,
  "userData": UserData
}

interface AuthQuery {
  InitData: string
}

@Injectable({
  providedIn: 'root',
})

export class AuthService extends ApiService {
  private urlPath = 'auth';

  telegramService = inject(TelegramService);

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this.getToken());
  private userDataSubject: BehaviorSubject<UserData | null> = new BehaviorSubject<UserData | null>(null);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  token$: Observable<string | null> = this.tokenSubject.asObservable();

  tokenMock: string = "jJJFSn238dsjfJNSJKDnsfuNJDNSKDNjdfsjkdnmm";
  fakeData: boolean = true;

  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggin(): boolean {
    return !!this.getToken();
  }

  auth(): Observable<AuthData> {
    let params;
    if (this.fakeData) {
      params = {
        "InitData": "query_id=AAH1wKJ0AgAAAPXAonTVn8cF&user=%7B%22id%22%3A6251790581%2C%22first_name%22%3A%22Boba%22%2C%22last_name%22%3A%22Bongo%22%2C%22username%22%3A%22bobabonga%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721718024&hash=a3334ed33f6127c7169042b344faf105654e69c883086427cb6b46ca0e7b2927"
      }

      this.setToken(this.tokenMock);
    } else {
      params = {
        "InitData": this.telegramService.initData()
      }
    }
    const url = `${this.urlPath}/sign-in`;
    this.loadingSubject.next(true);
    return this.post<AuthData, AuthQuery>(url, params).pipe(
      tap(response => {
        if (response) {
          this.setToken(response.accessToken);
          this.userDataSubject.next(response.userData);
          console.log('response');
          console.log(response);
        }
      }),
      finalize(() => {
        this.loadingSubject.next(false);
        this.router.navigate(['/home']);
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => "error");
      }
      )
    )
  }

}