# Flower E-commerce Site

Professional README for the Flower E-commerce project (fullstack: frontend + backend).

This repository contains a React frontend and a Node/Express backend (MongoDB) that power an online flower store. The backend provides a RESTful API for managing products (flowers), image uploads, categories and user authentication. The frontend is a React app that consumes the API and provides a shopping experience.

---

## Table of Contents

- About
- Features
- Live Demo
- Tech Stack
- Repo Structure
- Getting Started (Windows / PowerShell)
- Environment Variables
- API Summary
- Deployment Notes
- Contributing
- License
- Contact

## About

The Flower E-commerce Site is a small full-stack project demonstrating a product catalog with image uploads, category pages, user sign-up/login, and a cart/checkout flow. It’s suitable as a learning project or a base for a small online store.

## Features

- Product (flower) CRUD via REST API
- Image upload support for products
- Category filtering (Fresh, Dried, Live, Aroma, Fresheners)
- User signup and login with hashed passwords
- Mobile-responsive React frontend
- CORS enabled for local development

## Live Demo
[Live Demo](https://flower-e-commerce-site.onrender.com/)

## Tech Stack

- Frontend: React (Create React App), React Router, Axios
- Backend: Node.js, Express, Mongoose (MongoDB)
- File uploads: multer (and Cloudinary utility available)
- Auth: bcryptjs + JSON Web Tokens (JWT)
- Environment: dotenv

## Repo Structure

- /backend — Express API
  - server.js — main server file
  - routes/ — Express routes (flowers, users)
  - controller/ — request handlers
  - model/ — Mongoose models
  - uploads/ — uploaded images (served statically)
  - util/ — Cloudinary and Stripe helpers
- /frontend — React app
  - src/ — components, pages, context

## Getting started (Windows / PowerShell)

Prerequisites:

- Node.js >= 16 and npm
- A MongoDB instance (Atlas or local)

Clone the repository:

```powershell
git clone https://github.com/AV65/flower-e-commerce-site.git
cd flower-e-commerce-site
```

Backend (API):

```powershell
cd backend
npm install
# create a .env file (see sample below)
npm run dev      # uses nodemon for development
# or: npm start   # to run the production server (node server.js)
```

Frontend (React):

```powershell
cd frontend
npm install
npm start         # opens dev server at http://localhost:3000
```

By default the backend listens on port 5000 and the frontend on 3000. The frontend is configured to call the API (CORS is enabled in the backend).

## Environment variables (.env)

Create a `.env` file in `/backend` with the following variables (example):

```
PORT=5000
MONGO_URI=your_mongo_connection_string_here
JWT_SECRET=some_strong_secret
# If using Cloudinary for remote image uploads
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

Notes:
- Do NOT commit real secrets to source control. Use environment variables or a secret manager.

## API Summary

- Base URL (development): https://flower-e-commerce-site.onrender.com/

Auth routes (backend):
- POST /api/users/signup — register a new user
- POST /api/users/login — login, returns JWT
- GET /api/users/getusers — list users (example route)

Flower/product routes:
- GET /api/flowers — list products
- GET /api/flowers/:id — get product by id
- POST /api/flowers — create product (supports file upload)
- PATCH /api/flowers/:id — update product
- DELETE /api/flowers/:id — delete product

For detailed request/response payloads consult the code in `backend/routes` and `backend/controller`.

## Deployment notes

- Build frontend for production:

```powershell
cd frontend
npm run build
```

- Serve the `build` folder with a static server or integrate with the backend to serve static files. When deploying the backend, set `MONGO_URI` and `JWT_SECRET` securely.
- If you host images via Cloudinary, configure the Cloudinary keys in environment variables and use the provided `util/Cloudinary.js` helper.


## License

This project is provided under the MIT License. See the `LICENSE` file for details.

## Contact

- Author: Muhammad Farouk
- Email: salihiyaha4@gmail.com
- GitHub: https://github.com/AV65
