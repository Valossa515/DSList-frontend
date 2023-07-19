import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameDTO } from '../../../models/game';
import { findGamesByListIdRequest } from '../../../services/game-service';
import { GameCard } from '../../../components';
import Menu from '../../../components/Menu/Menu'; // Importe o componente Menu aqui
import './styles.css'
const GamesBody: React.FC = () => {
  const params = useParams<{ listId: string }>();
  const [games, setGames] = useState<GameDTO[]>([]);

  useEffect(() => {
    const listId = Number(params.listId);
    if (!isNaN(listId) && listId > 0) {
      findGamesByListIdRequest(listId)
        .then(response => {
          setGames(response.data);
        })
        .catch(error => {
          console.log('Error fetching games:', error);
        });
    } else {
      console.error('ID de Lista Inválido:', params.listId);
    }
  }, [params.listId]);

  return (
    <main>
      <Menu /> {/* Inclua o componente Menu aqui */}
      <section className="games-section">
        <div className="games-title">
          <p>Games</p> {/* Adicione a classe "games-title" para o parágrafo */}
        </div>
        <div className="container">
          <div className="game-listing-container">
            {games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GamesBody;
