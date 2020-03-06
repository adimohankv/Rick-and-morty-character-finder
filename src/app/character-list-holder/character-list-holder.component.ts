import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { CharacterList } from '../models/characterList.model';
import { APIService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list-holder',
  templateUrl: './character-list-holder.component.html',
  styleUrls: ['./character-list-holder.component.scss']
})
export class CharacterListHolderComponent implements OnInit {
  characterList: CharacterList;
  totalCharacters: number;
  pageEvent: PageEvent;
  pageSize: number;
  characterList$: Observable<CharacterList>;

  constructor(private api: APIService) {
    this.characterList$ = api.responseObservable;
  }

  ngOnInit(): void {
    this.characterList$.subscribe(response => {
      this.characterList = response;
      this.totalCharacters = response.info.count;
      this.pageSize = response.results.length;
    });
    this.api.getChracterList();
  }

  getNextPage(event: PageEvent): PageEvent {
    this.api.getPage(event.pageIndex + 1);
    return event;
  }

}
