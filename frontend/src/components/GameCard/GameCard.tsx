// GameCard.tsx
import React from 'react';
import { GameDTO } from '../../models/game';
import './styles.css';

type Props = {
  game: GameDTO;
};

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.imgUrl} alt={game.title} className="game-image" />
      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-details">Short Description: {game.shortDescription}</p>
      </div>
    </div>
  );
};

export default GameCard;
