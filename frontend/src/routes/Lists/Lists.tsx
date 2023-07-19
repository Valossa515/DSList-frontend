// pages/Lists/index.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListDTO } from '../../models/list';
import { findAllListsRequest } from '../../services/list-service';
import './styles.css'
const Lists: React.FC = () => {
  const [lists, setLists] = useState<ListDTO[]>([]);

  useEffect(() => {
    findAllListsRequest()
      .then(response => {
        setLists(response.data);
      })
      .catch(error => {
        console.log('Error fetching lists:', error);
      });
  }, []);

  return (
    <div>
      <h1>Listas</h1>
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            <Link to={`/lists/${list.id}/games`}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
