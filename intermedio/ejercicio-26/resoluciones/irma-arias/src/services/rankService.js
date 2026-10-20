export function getPlayerRank(playerId, repository) {
  const player = repository.findById(playerId);
  if (!player) return null;
  return { id: player.id, name: player.name, rank: player.score >= 1000 ? 'oro' : 'plata' };
}
