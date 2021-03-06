import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input()
  character: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
