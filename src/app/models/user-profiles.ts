import { getHtmlTagDefinition } from '@angular/compiler';

export interface Users {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  afficher: boolean;
  getAge(): void;
}
