export type Moto = {
  id: string;
  title: string;
  image: string;
  marca: string;
  cilindrada: string;
}

export type MotoPage = {
  content: Moto[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}