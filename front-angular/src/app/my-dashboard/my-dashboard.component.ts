import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../login/shared/user.service';
import { DataProvider } from '../providers/data.provider';
import { CharacterService } from './shared/character.service';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent implements OnInit {

  user: any = {};
  characters: any[] = [];
  jobs: any[] = [];
  amulets: any[] = [];
  elements: any[] = [];
  spinner = false;
  loadingCharacters = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private characterService: CharacterService,
    private dataProvider: DataProvider,
  ) { }

  ngOnInit() {
    localStorage.getItem('userId') ? this.getUser(localStorage.getItem('userId')) : this.router.navigate(['/login']);
  }

  setupInit(userId) {
    this.getUser(userId);
  }

  getUser(userId: string) {
    this.spinner = true;
    this.userService.getUserById(userId).subscribe((user: any) => {
      if (user !== null) {
        this.user = user;
        this.loadingCharacters = true;
        this.spinner = false;
        console.log(user);
        this.getCharacterByUser(user.id);
      } else {
        this.spinner = false;
        alert('Ops! Erro ao carregar Usuário');
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    }, error => {
      console.log(error);
      this.spinner = false;

    });
  }
  getCharacterByUser(userId) {
    this.characterService.getCharacterByUser(userId).subscribe((characters: any) => {
      if (characters !== null) {
        this.characters = characters.sort((a, b) => b.level - a.level);
        this.loadingCharacters = false;
        this.getDetailsCharacters(characters);
      } else {
        this.loadingCharacters = false;
        this.characters = undefined;
        alert('Ops! Erro ao carregar personagens!');
      }
    }, error => {
      console.log(error);
      this.loadingCharacters = false;
      this.characters = undefined;
      alert('Ops! Erro ao carregar personagens!');

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
  logout() {
    localStorage.clear();
    this.dataProvider.userLoged = undefined;
    this.router.navigate(['/login']);
  }
  goToRanking() {
    this.router.navigate(['/ranking']);
  }
  detailsCharacter(id) {
    this.router.navigateByUrl(`character/${id}/details`);
  }

}
