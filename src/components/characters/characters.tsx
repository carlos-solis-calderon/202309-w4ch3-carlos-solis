export interface Character {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  type: 'king' | 'fighter' | 'advisor' | 'squire';
  reignYears?: number;
  weapon?: string;
  skill?: number;
  advisorTo?: Character;
  serves?: Character;
  servility?: number;
}

export type Data = {
  characters: Character[];
};
