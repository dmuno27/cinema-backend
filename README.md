# Backend - Cinema API

Este es el backend para una aplicación de gestión de cine, desarrollado con Node.js, Express y Sequelize. El backend se conecta a una base de datos MySQL para gestionar películas, salas de cine, y reservas de asientos.

## Índice

- [Características](#características)
- [Tecnologías usadas](#tecnologías-usadas)
- [Instalación](#instalación)
- [Configuración](#configuración)

## Características

- API RESTful para la gestión de películas, salas de cine y reservas de asientos.
- Conexión con una base de datos MySQL usando Sequelize como ORM.
- Permite crear y leer datos relacionados con películas, salas y asientos.

## Tecnologías usadas

Este proyecto fue construido con las siguientes tecnologías:

- **Node.js**: JavaScript runtime para el backend.
- **Express**: Framework minimalista para Node.js.
- **Sequelize**: ORM para interactuar con la base de datos MySQL.
- **MySQL**: Sistema de gestión de bases de datos relacional.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

### 1. Clona el repositorio

```bash
git clone https://github.com/dmuno27/cinema-backend.git

### 2. Navega a la carpeta del proyecto

```bash
cd cinema-backend

### 3. Instala dependencias

```bash
npm install

### 4. Ejecuta migraciones de sequelize

```bash
npx sequelize-cli db:migrate

### 5. Ejecuta migraciones de sequelize

```bash
npm start
