import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent implements OnInit {

  developer: Developer;

  constructor() { }

  ngOnInit(): void {
    this.developer = {
      firstName: 'Jerome',
      lastName: 'Duvaudier',
      age: 41,
      bio: 'trop long à expliquer',
      sexe: 'M',
      skills: [{
        logo: 'y en a pas',
        name: 'angular',
        site: 'http://www.angular.io'
      },
      {
        logo: 'à venir',
        name: 'java',
        site: 'http://www.java.com'
      }]
    }
  }

}
