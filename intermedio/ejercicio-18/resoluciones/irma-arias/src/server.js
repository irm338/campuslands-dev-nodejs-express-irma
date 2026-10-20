import express from 'express';
import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);
const app = express();
app.use(express.json());
const jumpers = [];
app.post('/api/jumpers', async (request, response) => {
  const { name, password } = request.body ?? {};
  if (typeof name !== 'string' || !name.trim() || typeof password !== 'string' || password.length < 8) {
    return response.status(400).json({ error: 'Se requiere nombre y contraseña de al menos 8 caracteres.' });
  }
  const salt = randomBytes(16).toString('hex');
  const hash = await scrypt(password, salt, 64);
  const jumper = { id: jumpers.length + 1, name: name.trim(), salt, hash: hash.toString('hex') };
  jumpers.push(jumper);
  const { id, name: savedName } = jumper;
  return response.status(201).json({ data: { id, name: savedName } });
});
app.post('/api/jumpers/verify', async (request, response) => {
  const jumper = jumpers.find((item) => item.name === request.body?.name);
  if (!jumper || typeof request.body?.password !== 'string') return response.status(401).json({ valid: false });
  const candidate = await scrypt(request.body.password, jumper.salt, 64);
  const valid = timingSafeEqual(Buffer.from(jumper.hash, 'hex'), candidate);
  return response.json({ valid });
});
app.listen(process.env.PORT || 3000, () => console.log('API de paracaidismo disponible en el puerto 3000'));
