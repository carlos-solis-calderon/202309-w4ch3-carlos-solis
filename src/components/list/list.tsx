import { useEffect } from 'react';
import { Card } from '../cards/card';
import { useTasks } from '../../hooks/useCharacter';
import '../../style.css';

export function List() {
  const { characters, loadCharacters } = useTasks();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);
  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((item) => (
        <Card key={item.name} character={item}></Card>
      ))}
    </ul>
  );
}
