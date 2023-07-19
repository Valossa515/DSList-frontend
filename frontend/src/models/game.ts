// models/game.ts
export interface GameDTO {
  id: number;
  title: string;
  year: number;
  genre: string;
  platforms: string;
  imgUrl: string;
  score: number;
  longDescription: string;
  shortDescription: string;
}
