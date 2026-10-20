# Ejercicio 26: Mock de dependencias

## Propósito

Probar el servicio de clasificación de jugadores sin depender de una fuente real de resultados. La prueba inyecta un repositorio simulado que devuelve una puntuación controlada.

## Ejecución

Requiere Node.js 20 o superior. Ejecuta `npm install` y luego `npm test`. Usa `npm run dev` para iniciar el endpoint demostrativo.

## Endpoint

`GET /api/players/:id/rank` calcula el rango usando el puntaje disponible en el repositorio de ejemplo.
