import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CharacterList } from '../models/characterList.model';
import { FilterService } from './filter.service';
import { FilterType } from 'src/data/filter-options';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiBasicUrl = 'https://rickandmortyapi.com/api/character';
  private responseSource = new Subject<CharacterList>();
  private filter$: Observable<FilterType[]>;
  private page = '1' ;
  private name = '';
  private species = '';
  private status = '';
  private gender = '';
  public responseObservable = this.responseSource.asObservable();

  constructor(
    private http: HttpClient,
    private filterSerivce: FilterService
    ) {
    this._setupFilterObserver();
  }

  _setupFilterObserver() {
    this.filter$ = this.filterSerivce.filter$.pipe(debounceTime(1000));
    this.filter$.subscribe(filters => {
      for (const filterSections of filters) {
        for (const filter of filterSections.filterOptions) {
          if (filter.isSelected) {
            this[filterSections.filterType] = filter.key;
            break;
          } else {
            this[filterSections.filterType] = '';
          }
        }
      }
      this.getChracterList();
    });
  }

  _getLatestPrams() {
    return new HttpParams({fromObject: {
      page: this.page,
      name: this.name,
      species: this.species,
      status: this.status,
      gender: this.gender
    }});
  }

  getChracterList() {
    this.http.get<CharacterList>(this.apiBasicUrl, {
      params: this._getLatestPrams()
    }).subscribe(response => this.responseSource.next(response));
  }

  getPage(page: number) {
    this.page = `${page}`;
    this.getChracterList();
  }

  searchByName(name: string) {
    this.name = name;
    this.getChracterList();
  }
}
