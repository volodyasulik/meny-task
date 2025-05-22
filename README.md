# 🍽 Recipes Monorepo

Monorepo containing:
- `/frontend` — Next.js client
- `/backend` — NestJS API

Managed with **Yarn Workspaces**.

## 📦 Structure

recipes-monorepo/
├── frontend/       # Next.js app
├── backend/        # NestJS API
├── package.json    # root with scripts/workspaces
├── .gitignore
└── README.md

## 🚀 Setup

### Install all dependencies

yarn install

### Start backend (NestJS)

yarn start:back

> URL: [http://localhost:8080](http://localhost:8080)

### Start frontend (Next.js)

yarn start:front

> URL: [http://localhost:3000](http://localhost:3000)

### Start both in parallel

yarn start

## 🌐 Environment Variables

### backend/.env

PORT=8080
MEAL_API_URL=https://www.themealdb.com/api/json/v1/1

### frontend/.env.local

NEXT_PUBLIC_API_URL=http://localhost:8080
PORT=3000


## 🔍 API Testing

* `GET /recipes`
* `GET /recipes?ingredient=Chicken`
* `GET /recipes?area=Italian`
* `GET /recipes?category=Vegetarian`
* `GET /recipes/:id`

Test with Postman or browser.

## 💻 Frontend Pages

* `/` — Home
* `/recipes` — List
* `/recipes/:id` — Recipe details
* `/recipes?ingredient=Chicken` — Filtered list
