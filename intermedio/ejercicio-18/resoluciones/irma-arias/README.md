# Ejercicio 18: Hash de contraseñas conceptual

## Propósito

Registrar a una persona que practica paracaidismo sin guardar su contraseña original. Node.js genera un salt aleatorio y deriva un hash con `scrypt`; la respuesta no expone ni contraseña ni hash.

## Ejecución y prueba

Requiere Node.js 20 o superior. Ejecuta `npm install` y `npm run dev`. Envía `POST /api/jumpers` con `{"name":"Alex","password":"salto-seguro"}`. Una contraseña vacía o demasiado corta se rechaza con estado `400`.

La lista de usuarios es temporal y en memoria. Para producción se requiere almacenamiento y controles adicionales.
