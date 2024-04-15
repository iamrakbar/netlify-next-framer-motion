export interface island {
  label: string;
  image: string;
  area: number;
  population: number;
}

export const allIslands = [
  {
    label: 'Sumatera',
    image: '/maps/sumatera.svg',
    area: 473481,
    population: 47010000,
  },
  {
    label: 'Java',
    image: '/maps/java.svg',
    area: 138794,
    population: 139448718,
  },
  {
    label: 'Borneo',
    image: '/maps/kalimantan.svg',
    area: 748168,
    population: 21258000,
  },
  {
    label: 'Sulawesi',
    image: '/maps/sulawesi.svg',
    area: 180681,
    population: 17371783,
  },
  {
    label: 'Papua',
    image: '/maps/papua.svg',
    area: 785753,
    population: 11818000,
  },
];
