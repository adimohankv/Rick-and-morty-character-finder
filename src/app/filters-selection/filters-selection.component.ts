import { Component, OnInit } from '@angular/core';

import { FilterService } from '../services/filter.service';
import { Filter } from '../../data/filter-options';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filters-selection',
  templateUrl: './filters-selection.component.html',
  styleUrls: ['./filters-selection.component.scss']
})
export class FiltersSelectionComponent implements OnInit {
  selectedFilters: Filter[] = [];

  constructor(private filters: FilterService) { }

  ngOnInit(): void {
    this.filters.filter$.subscribe(filterOptions => {
      this.selectedFilters = [];
      for (const filterSections of filterOptions) {
        for (const filter of filterSections.filterOptions) {
          if (filter.isSelected) {
            this.selectedFilters = [...this.selectedFilters, {...filter}];
          }
        }
      }
    });
  }

  removeFilter(key: string) {
    this.filters.updateFilter(key);
  }
}
