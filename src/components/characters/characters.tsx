export type GOTCharacters = Fighter | Advisor | Squire | King;

export interface Character {
  serie: 'Game of thrones';
  isAlive: boolean;
  name: string;
  family: string;
  age: number;
}
