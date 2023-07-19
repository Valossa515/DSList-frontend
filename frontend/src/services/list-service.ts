// services/list-service.ts
import axios from 'axios';
import { BACKEND_URL } from '../utils/system';
import { ListDTO } from '../models/list';

export function findAllListsRequest() {
  return axios.get<ListDTO[]>(`${BACKEND_URL}/lists`);
}


