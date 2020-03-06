import { Component, OnChanges, SimpleChanges } from '@angular/core';

import { APIService } from '../services/api.service';

@Component({
  selector: 'app-char-search-sort',
  templateUrl: './char-search-sort.component.html',
  styleUrls: ['./char-search-sort.component.scss']
})
export class CharSearchSortComponent implements OnChanges {
  value = '';
  sortBy = 'asscending';

  constructor(private api: APIService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onInputChange() {
    this.api.searchByName(this.value);
  }

  onCloseButtonClick() {
    this.value = '';
    this.api.searchByName(this.value);
  }

}
