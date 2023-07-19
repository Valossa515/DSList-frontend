// src/components/GameCardList.tsx
import React from 'react';
import { GameDTO } from '../../models/game';
import './styles.css'; // Importe os estilos aqui

type Props = {
  game: GameDTO;
};

const GameCardList: React.FC<Props> = ({ game }) => {
  return (
    <div className="game-card">
      <h3>{game.title}</h3>
      <p>Year: {game.year}</p>
      <p>Genre: {game.genre}</p>
      <p>Platforms: {game.platforms}</p>
      <img src={game.imgUrl} alt={game.title} />
    </div>
  );
};

export default GameCardList;
