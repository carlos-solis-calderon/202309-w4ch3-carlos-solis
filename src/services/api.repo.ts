import { Character } from '../models/character';

export class ApiRepo {
  apiUrl = 'http://localhost:3000/characters';

  async getTasks(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
