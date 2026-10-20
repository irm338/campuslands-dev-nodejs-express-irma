import express from 'express';
import * as playerRepository from './repositories/playerRepository.js';
import { getPlayerRank } from './services/rankService.js';

const app = express();
app.get('/api/players/:id/rank', (request, response) => {
  const result = getPlayerRank(request.params.id, playerRepository);
  if (!result) return response.status(404).json({ error: 'Jugador no encontrado.' });
  return response.json({ data: result });
});
app.listen(process.env.PORT || 3000, () => console.log('API de shooter disponible en el puerto 3000'));
