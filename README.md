# React-Notes

#### Save your important notes on the go

Project in Action - [React Notes](https://notes-hfhj.onrender.com/)

![React Notes 1](https://user-images.githubusercontent.com/88419331/216833389-aa652d73-a819-444d-b1d4-8b3390d0fad7.png)


## Features

- Use ES6 Modules on the back-end
- Global context using createContext and utilize useContext hook
- Setup MongoDB database in the cloud (Atlas)
- Utilize "express-async-errors" package (eliminate use of try/catch blocks)
- Implement custom Error-Handling with personalized status codes
- Persist data in local storage
- Implement search functionality along with pagination
- view last edit & light/dark themes
- use event bubbling on parent node to listen for events

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

# Note
For responsive layouts -  Mobile Devices between 320px to 480px only.


