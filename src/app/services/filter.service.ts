import { filterOptions } from '../../data/filter-options';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterOptions = filterOptions;
  private filterSubject = new BehaviorSubject(this.filterOptions);
  public filter$ = this.filterSubject.asObservable();

  updateFilter(key: string, filterType?: string) {
    for (const filterSections of filterOptions) {
      for (const filter of filterSections.filterOptions) {
        if (filter.key === key) {
          filter.isSelected = !filter.isSelected;
        } else if (filterSections.filterType === filterType) {
          filter.isSelected = false;
        }
      }
    }
    this.filterSubject.next(this.filterOptions);
  }
}
