import express from 'express';

const app = express();
app.get('/api/heroes', (_request, response) => response.json({ data: [{ id: 1, name: 'Ayla', class: 'mage' }] }));

export default app;
