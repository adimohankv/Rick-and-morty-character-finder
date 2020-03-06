export interface FilterType {
  filterType: string;
  filterTypeName: string;
  filterOptions: Filter[];
}

export interface Filter {
  isSelected: boolean;
  value: string;
  key: string;
}

export const filterOptions: FilterType[] = [
  {
    filterType: 'species',
    filterTypeName: 'Species',
    filterOptions: [
      {
        isSelected: false,
        value: 'Human',
        key: 'human'
      },
      {
        isSelected: false,
        value: 'Alien',
        key: 'alien'
      },
      {
        isSelected: false,
        value: 'Other Species',
        key: 'otherSpecies'
      }
    ]
  },
  {
    filterType: 'gender',
    filterTypeName: 'Gender',
    filterOptions: [
      {
        isSelected: false,
        value: 'Male',
        key: 'male'
      },
      {
        isSelected: false,
        value: 'Female',
        key: 'female'
      }
    ]
  },
  {
    filterType: 'status',
    filterTypeName: 'Status',
    filterOptions: [
      {
        isSelected: false,
        value: 'Unknown',
        key: 'unknown'
      },
      {
        isSelected: false,
        value: 'Alive',
        key: 'alive'
      },
      {
        isSelected: false,
        value: 'Dead',
        key: 'dead'
      }
    ]
  }
];
