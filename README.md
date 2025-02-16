# Proyecto de Evaluación - Angular, NestJS y PostgreSQL

Este repositorio contiene la configuración necesaria para levantar una base de datos mediante Docker Compose. Está destinado a desarrolladores en proceso de evaluación.

## 📂 Estructura del Proyecto
```
📂 nvx-eval
├── 📂 backend
├── 📂 database
└── 📁 frontend
└── docker-compose.yml
```

## 🚀 Requisitos
- Docker y Docker Compose
- Node.js 20
- Git

## ⚙️ Configuración y Ejecución
1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/edsondamc/nvx-eval.git
   cd nvx-eval
   ```
2. **Inicia el contenedor de la base de datos:**
   ```bash
   docker compose up database --build -d
   ```
3. **Ejecuta el backend:**
   ```bash
   cd backend
   npm ci
   npm run start:dev
   ```
4. **Ejecuta el frontend:**
   ```bash
   cd frontend
   npm ci
   npm run start
   ```

## 🌐 Accesos y Endpoints
- **Backend:** http://localhost:3000
- **Frontend:** http://localhost:4200
- **Base de datos:**`localhost:5432`

## 📌 Evaluación
- Al inicio de la evaluación se proporcionarán las tareas para los desarrolladores.

## 🧹 Limpieza
- **Eliminar datos de PostgreSQL:** Borra la carpeta `./database/data`
- **Detener y eliminar los contenedores:**
   ```bash
   docker compose down
   ```

---
💡 ¡Buena suerte!

