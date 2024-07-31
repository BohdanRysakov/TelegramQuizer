import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-not-auth',
  templateUrl: './not-auth.component.html',
  styleUrls: ['./not-auth.component.scss']
})
export class NotAuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.auth();
  }

}
