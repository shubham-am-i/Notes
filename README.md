# React-Notes

#### Save your important notes on the go

Project in Action - [React Notes](https://notes-hfhj.onrender.com/)

## Features

- Use ES6 Modules on the back-end
- Global context using createContext and utilize useContext hook
- Setup MongoDB database in the cloud (Atlas)
- Utilize "express-async-errors" package (eliminate use of try/catch blocks)
- Implement custom Error-Handling with personalized status codes
- Persist data in local storage
- Setup nice charts and cards
- Implement search/filter functionality along with pagination

## Usage

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
```

### Install Dependencies (frontend & backend)

```
npm run install-dependencies
```

### Run

```
# Run frontend (:3000) & backend (:5000) both using concurrently
npm run dev
# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
npm run build-client
```
![2022-12-10 (1)](https://user-images.githubusercontent.com/88419331/206851796-699dd8e7-4681-4487-a5b6-ed6a227e5d94.png)

