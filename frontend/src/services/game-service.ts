// services/game-service.ts

import axios from 'axios';
import { BACKEND_URL } from '../utils/system';

export function findByIdRequest(gameId: number) {
  return axios.get(`${BACKEND_URL}/games/${gameId}`);
}

export function findGamesByListIdRequest(listId: number) {
  return axios.get(`${BACKEND_URL}/lists/${listId}/games`);
}

export function findAllRequest() {
  return axios.get(`${BACKEND_URL}/lists`);
}

export function findListByIdRequest(listId: number) {
  return axios.get(`${BACKEND_URL}/lists/${listId}`);
}

export function moveGameWithinListRequest(
  listId: number,
  sourceIndex: number,
  destinationIndex: number
) {
  return axios.post(`${BACKEND_URL}/lists/${listId}/replacement`, {
    sourceIndex,
    destinationIndex,
  });
}
