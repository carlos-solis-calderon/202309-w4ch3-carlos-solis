import {} from '../src/server/db.json';

export async function gotChars() {
  const response = await fetch('http://localhost:3000/characters');
  const characters = await response.json();
  return characters.map((item) => {
    console.log(item);
  });
}
