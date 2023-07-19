// pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const Home: React.FC = () => {
  return (
    <div>
      <h1>Bemn-Vindo à coleção de jogos</h1>
      <Link to="/lists">Go to Lists</Link>
    </div>
  );
};

export default Home;
