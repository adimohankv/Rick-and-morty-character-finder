import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-sections.component.html',
  styleUrls: ['./filter-sections.component.scss']
})
export class FilterSectionsComponent implements OnInit {
  filterData = [];

  constructor(private filterService: FilterService) {
    filterService.filter$.subscribe(filter => {
      this.filterData = filter;
    });
   }

  ngOnInit(): void { }

  updateFilterValue(event: MatRadioChange) {
    this.filterService.updateFilter(event.value, event.source.radioGroup.name);
  }

}
