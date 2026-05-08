# Sistema D-Gustador

Sistema de gestión para restaurante de alitas y comida rápida.

## Tecnologías
- **Base de datos:** MySQL
- **Backend:** Node.js + Express
- **Frontend:** HTML + CSS + JavaScript

## Estructura del proyecto
d-gustador-system/
├── database/     # Schema y migraciones de base de datos
├── backend/      # API REST con Node.js + Express
├── frontend/     # Interfaz de usuario
└── README.md

## Base de datos
El sistema maneja las siguientes entidades:
- Productos con variantes de tamaño y precio
- Sabores por producto
- Clientes con sistema de puntos
- Pedidos y detalle de pedidos

## Instalación
### Base de datos
1. Tener MySQL instalado (XAMPP recomendado)
2. Crear la base de datos ejecutando:
```bash
mysql -u root -p < database/schema.sql
```

##  Autor
Dominic — [@Deskms](https://github.com/Deskms)
