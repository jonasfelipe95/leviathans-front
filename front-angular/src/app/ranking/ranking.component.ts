import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../my-dashboard/shared/character.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  spinner = false;
  loadingCharacters = false;
  characters: any[] = [];
  jobs: any[] = [];
  amulets: any[] = [];
  elements: any[] = [];
  rankingType = 'level';

  constructor(
    private router: Router,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    localStorage.getItem('userId') ? this.setupRanking(localStorage.getItem('userId')) : this.router.navigate(['/login']);
  }

  setupRanking(userId) {
    this.characterService.getAll().subscribe((characters: any) => {
      if (characters !== null) {
        this.rankingSort(characters);
      }
    }, error => {
      console.log(error);
    });
  }
  getDetailsCharacters(characters: any[]) {
    characters.forEach((character, index) => {
      this.getJobById(character.job, index);
      this.getAmuletById(character.amulet, index);
      this.getElementById(character.element, index);
    });
  }
  getJobById(jobId, index) {
    this.characterService.getJobById(jobId).subscribe(job => {
      if (job !== null) {
        this.jobs[index] = job;
      } else {
        alert('Ops! Erro ao carregar classe dos personagens.');
      }
    }, error => {
      console.log(error);
      alert('Ops! Erro ao carregar classe dos personagens.');
    });
  }
  getAmuletById(amuletId, index) {
    this.characterService.getAmuletById(amuletId).subscribe(amulet => {
      if (amulet !== null) {

        this.amulets[index] = amulet;
      } else {
        alert('Ops! Erro ao carregar amuletos dos personagens!');
      }
    }, error => {
      console.log(error);
      alert('Ops! Erro ao carregar amuletos dos personagens!');
    });
  }
  getElementById(elementId, index) {
    this.characterService.getElementById(elementId).subscribe(element => {
      if (element !== null) {
        this.elements[index] = element;
      } else {
        alert('Ops! Erro ao carregar elementos dos personagens!');
      }
    }, error => {
      console.log(error);
      alert('Ops! Erro ao carregar elementos dos personagens!');
    });
  }

  detailsCharacter(id) {
    this.router.navigateByUrl(`character/${id}/details`);
  }
  rankingSort(characters) {
    if (this.rankingType === 'level') {
      this.characters = characters.sort((a, b) => b.level - a.level);
      this.getDetailsCharacters(this.characters);
    } else if (this.rankingType === 'time') {
      this.characters = characters.sort((a, b) => b.battleTimeInSeconds - a.battleTimeInSeconds);
      this.getDetailsCharacters(this.characters);
    } else if (this.rankingType === 'victories') {
      this.characters = characters.sort((a, b) => b.victorysNumber - a.victorysNumber);
      this.getDetailsCharacters(this.characters);
    } else {
      this.characters = characters.sort((a, b) => b.level - a.level);
      this.getDetailsCharacters(this.characters);
    }
  }
  formatTime(seconds: number) {
    const HH = Math.floor(seconds / 360);
    const MM = Math.floor((seconds % 360) / 60);
    const SS = seconds % 60;
    return `${
      HH < 10 ? '0' + HH : HH
      }:${
      MM < 10 ? '0' + MM : MM
      }:${
      SS < 10 ? '0' + SS : SS
      }`;
  }
  sortRanking(type) {
    if (this.rankingType !== type) {
      this.rankingType = type;
      this.rankingSort(this.characters);
    }

  }

}
