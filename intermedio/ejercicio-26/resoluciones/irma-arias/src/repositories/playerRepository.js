const players = [{ id: '1', name: 'Nova', score: 1250 }];

export function findById(id) {
  return players.find((player) => player.id === id) ?? null;
}
