¡Claro! Aquí tienes un `README.md` bien estructurado para tu proyecto **BookSwap API**, siguiendo los puntos que mencionaste:

---

````markdown
# 📚 BookSwap API

Una API construida con **NestJS** que permite a los usuarios intercambiar libros. Los visitantes pueden ver todos los libros disponibles sin autenticación, mientras que los usuarios autenticados pueden publicar nuevos libros.

---

## 🎯 Objetivo del Proyecto

Diseñar y desarrollar una API RESTful que permita:

- Registrar usuarios manualmente en base de datos.
- Autenticarse mediante JWT.
- Publicar libros por parte de usuarios autenticados.
- Consultar libros públicamente.

---

## 🛠️ Tecnologías Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)

---

## 🧱 Estructura del Proyecto

```bash
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt-auth.guard.ts
│   ├── jwt.strategy.ts
│   └── auth.module.ts
├── books/
│   ├── dto/create-book.dto.ts
│   ├── books.controller.ts
│   ├── books.service.ts
│   ├── book.entity.ts
│   └── books.module.ts
├── public/
│   ├── public.controller.ts
│   └── public.module.ts
├── users/
│   ├── user.entity.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
````

---

## 🗃️ Entidades

### 👤 User

| Campo    | Tipo   | Descripción                 |
| -------- | ------ | --------------------------- |
| id       | number | Clave primaria autogenerada |
| email    | string | Único                       |
| name     | string | Nombre del usuario          |
| password | string | Contraseña sin encriptar    |

> Nota: Los usuarios se insertan directamente en la base de datos (semilla). No hay registro desde Postman ni frontend.

### 📘 Book

| Campo       | Tipo   | Descripción                           |
| ----------- | ------ | ------------------------------------- |
| id          | number | Clave primaria autogenerada           |
| title       | string | Título del libro                      |
| author      | string | Autor del libro                       |
| description | string | Descripción del libro                 |
| owner       | User   | Relación ManyToOne con entidad `User` |

---

## 🔐 Autenticación

* Autenticación basada en JWT.
* `@nestjs/jwt` + estrategia `JwtStrategy`.
* Protección de rutas con `AuthGuard`.

### 🔑 Login simulado

* Endpoint: `POST /auth/login`
* Enviar en el body: `{ "email": "usuario@email.com", "password": "1234" }`
* Respuesta: token JWT.

---

## 📦 Rutas de la API

### 📖 PublicController `/public`

* `GET /public/books`:
  Retorna todos los libros con su respectivo dueño (solo nombre).
  **No requiere autenticación.**

### 📚 BooksController `/books`

* `POST /books`:
  Permite a usuarios autenticados publicar libros.
  **Requiere token Bearer.**

---

## 🔄 Ejemplo de flujo

1. Iniciar sesión en `/auth/login` con email y password → recibir token.
2. Usar el token en el header para enviar un libro:

   ```
   Authorization: Bearer <token>
   ```
3. Enviar en `POST /books` el JSON del libro:

   ```json
   {
     "title": "1984",
     "author": "George Orwell",
     "description": "Una novela distópica sobre el control y la vigilancia."
   }
   ```
4. Cualquier usuario (incluso sin token) puede hacer `GET /public/books` para ver los libros.

---

## 📑 Swagger

La documentación Swagger está disponible en:

```
http://localhost:3000/api
```

---

## ✅ Requerimientos evaluados

* [x] Estructura modular NestJS
* [x] TypeORM con PostgreSQL
* [x] Autenticación con JWT
* [x] Rutas protegidas con AuthGuard
* [x] Documentación Swagger funcional
* [x] Uso de DTOs para validación

---

## 🧪 Ejemplo de usuario (semilla para login)

```sql
INSERT INTO "user" (email, name, password)
VALUES ('juan@example.com', 'Juan Pérez', '1234');
```

---

## 🧑‍💻 Autor

**Diego Morales**
