import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../my-dashboard/shared/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  character: any;
  amulet: any;
  element: any;
  job: any;
  spinner = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  ngOnInit() {
    this.activatedRoute.snapshot.params.id ? this.getCharacter(this.activatedRoute.snapshot.params.id) : console.log('Can not found id');
  }
  getCharacter(id) {
    this.spinner = true;
    this.characterService.getChacacterById(id).subscribe((character: any) => {
      if (character != null) {
        this.character = character;
        this.getAmuletById(character.amulet);
        this.getJobById(character.job);
        this.getElementById(character.element);
        this.spinner = false;
      } else {
        this.spinner = false;
        alert('Ops! Erro ao carregar personagem!');
      }
    }, error => {
      console.log(error);
      this.spinner = false;
      alert('Ops! Erro ao carregar personagem!');
    });
  }
  getJobById(jobId) {
    this.characterService.getJobById(jobId).subscribe(job => {
      if (job !== null) {
        this.job = job;
      } else {
        alert('Ops! Erro ao carregar classe dos personagens.');
      }
    }, error => {
      console.log(error);
      alert('Ops! Erro ao carregar classe dos personagens.');
    });
  }
  getAmuletById(amuletId) {
    this.characterService.getAmuletById(amuletId).subscribe(amulet => {
      if (amulet !== null) {

        this.amulet = amulet;
      } else {
        alert('Ops! Erro ao carregar amuletos dos personagens!');
      }
    }, error => {
      console.log(error);
      alert('Ops! Erro ao carregar amuletos dos personagens!');
    });
  }
  getElementById(elementId) {
    this.characterService.getElementById(elementId).subscribe(element => {
      if (element !== null) {
        this.element = element;
      } else {
        alert('Ops! Erro ao carregar elementos dos personagens!');
      }
    }, error => {
      console.log(error);
      alert('Ops! Erro ao carregar elementos dos personagens!');
    });
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


}
