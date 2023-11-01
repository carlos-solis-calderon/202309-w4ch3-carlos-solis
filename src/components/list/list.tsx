import { useEffect } from 'react';
import { Card } from '../cards/card';
import { useTasks } from '../../hooks/useCharacter';
import {} from '../../style.scss';

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
