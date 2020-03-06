export interface Character {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
}
