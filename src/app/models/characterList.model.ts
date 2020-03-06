import { Character } from './character.model';

export interface CharacterList {
  info: {
    next: string;
    prev: string;
    pages: number;
    count: number;
  };
  results: Character[];
}
