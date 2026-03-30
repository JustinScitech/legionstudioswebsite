export interface Game {
  id: number;
  name: string;
  description: string | null;
  placeId: number;
  placeVisits: number;
  thumbnailUrl: string | null;
  gameUrl: string;
}
