import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.getItem('userId') ? this.setupRanking(localStorage.getItem('userId')) : this.router.navigate(['/login']);
  }

  setupRanking(userId) {
  }

}
