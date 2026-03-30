const FEATURED_PLACES = [
  {
    placeId: 6586689543,
    universeId: 2479031796,
    name: 'Jujutsu Kaisen: Battleground',
    gameUrl: 'https://www.roblox.com/games/6586689543/Jujutsu-Kaisen-Battleground',
  },
  {
    placeId: 92487291363621,
    universeId: 9737972106,
    name: 'Spiderman: Spiderverse Battlegrounds',
    gameUrl: 'https://www.roblox.com/games/92487291363621/Spiderman-Spiderverse-Battlegrounds',
  },
];

interface GameResponse {
  id: number;
  name: string;
  description: string | null;
  placeId: number;
  placeVisits: number;
  thumbnailUrl: string | null;
  gameUrl: string;
}

export default async function handler(_req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  try {
    const universeIds = FEATURED_PLACES.map((p) => p.universeId);

    const [gamesRes, thumbRes] = await Promise.all([
      fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds.join(',')}`),
      fetch(
        `https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeIds.join(',')}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`
      ),
    ]);

    const gamesData = gamesRes.ok ? await gamesRes.json() : { data: [] };
    const thumbData = thumbRes.ok ? await thumbRes.json() : { data: [] };

    const games: GameResponse[] = FEATURED_PLACES.map((featured) => {
      const game = gamesData.data?.find((g: any) => g.id === featured.universeId);
      const thumb = thumbData.data?.find((t: any) => t.targetId === featured.universeId);

      return {
        id: featured.universeId,
        name: game?.name || featured.name,
        description: game?.description || null,
        placeId: featured.placeId,
        placeVisits: game?.visits || 0,
        thumbnailUrl: thumb?.imageUrl || null,
        gameUrl: featured.gameUrl,
      };
    });

    return res.status(200).json({ games });
  } catch (err) {
    console.error('Games API error:', err);

    const fallback = FEATURED_PLACES.map((fp) => ({
      id: fp.universeId,
      name: fp.name,
      description: null,
      placeId: fp.placeId,
      placeVisits: 0,
      thumbnailUrl: null,
      gameUrl: fp.gameUrl,
    }));

    return res.status(200).json({ games: fallback });
  }
}
