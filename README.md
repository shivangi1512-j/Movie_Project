# Movie Project

## 1. Introduction

> Good morning sir/mam.

> My project name is **Movie Project**.

> This is a backend API project that I created using **Node.js, Express.js and MongoDB**.

> In this project, I have implemented basic **CRUD operations** for movies, such as adding a movie, viewing movies, updating movie details and deleting a movie.

---

## 2. Folder Structure

> Now I will explain my project folder structure.

> My project has a **src** folder, which contains **controller, models, routes and db** folders.

> The **controller** contains the movie logic, **models** contains the movie schema, **routes** contains the API routes, and **db** contains the MongoDB connection file.

> The root folder contains `index.js`, `.env`, `package.json`, `.gitignore` and `README.md`.

---

## 3. movieModels.js

> Now I will explain my **movieModels.js** file.

> I have used **Mongoose** to create a movie schema.

> It contains seven fields: **title, director, genre, releaseYear, language, duration and description**.

> I have used **String and Number** data types and also added **required validation**.

> Finally, I created the **Movie model** using this schema.

---

## 4. db.js

> Now my **db.js** file is used for connecting my application with MongoDB.

> I have used **Mongoose** to create the MongoDB connection.

> I have stored the MongoDB connection URL inside the `.env` file.

---

## 5. .env

> In my `.env` file, I have stored the **PORT** and **MONGO_URI**.

> I have used the **dotenv** package to access these environment variables.

> I have also added `.env` to the `.gitignore` file so that my MongoDB connection details are not uploaded to GitHub.

---

## 6. movieController.js

> Now I will explain my **movieController.js** file.

> In this file, I have created five main functions.

> The first one is **addMovie**, which is used to add a new movie.

> The second one is **getAllMovies**, which is used to fetch all movies.

> The third one is **getMovies**, which is used to get a specific movie using its ID.

> The fourth one is **updateMovie**, which is used to update an existing movie.

> The last one is **deleteMovie**, which is used to delete a movie.

> I have used **async and await** for database operations.

---

## 7. movieRoutes.js

> Now my **movieRoutes.js** file contains all the API routes.

> I have used **POST** to add a movie, **GET** to fetch movies, **PUT** to update a movie and **DELETE** to delete a movie.

### API Routes

```text
POST    /api/v1/movies
GET     /api/v1/movies
GET     /api/v1/movies/:id
PUT     /api/v1/movies/:id
DELETE  /api/v1/movies/:id
```

---

## 8. index.js

> Now I will explain my main **index.js** file.

> First, I have imported **Express** and **dotenv**.

> Then I have used `dotenv.config()` to load the environment variables.

> After that, I have connected my application with **MongoDB**.

> I have used `express.json()` middleware to receive JSON data.

> Then I have connected my **movie routes** with `/api/v1/movies`.

> Finally, I have used `app.listen()` to start my server.

---

## 9. Postman Demo

> Now I will test my **Movie API** using **Postman**.

### POST - Add Movie

> First, I will use the **POST** method to add a new movie.

```json
{
  "title": "3 Idiots",
  "director": "Rajkumar Hirani",
  "genre": "Comedy, Drama",
  "releaseYear": 2009,
  "language": "Hindi",
  "duration": 170,
  "description": "Three friends and their journey through college life."
}
```

> After sending the request, the movie will be successfully added to the database.

### GET - All Movies

> Now I will use the **GET** method to fetch all movies from the database.

### GET - Movie by ID

> Now I will use the **GET with ID** method to fetch a specific movie using its MongoDB ID.

### PUT - Update Movie

> Now I will use the **PUT** method to update the details of an existing movie using its ID.

### DELETE - Delete Movie

> Finally, I will use the **DELETE** method to delete a movie using its ID.

---

## 10. Technologies Used

> Now I will explain the technologies used in my project.

> I have used **Node.js** for the backend.

> I have used **Express.js** to create the server and API routes.

> I have used **MongoDB** as the database.

> I have used **Mongoose** to connect Node.js with MongoDB.

> I have used **dotenv** for environment variables.

> I have used **Postman** for API testing.

---

## 11. Project Explanation Video

> I have also created a video explaining my **Movie Project**.

> In this video, I have explained the **project structure, MongoDB connection, CRUD operations, API routes and Postman testing**.

### Project Explanation Video

[Watch Project Explanation Video](https://drive.google.com/file/d/1UWWIH27YCj8vFVfwXCR1aqA3j2pX-YFF/view?usp=sharing)


---

## 12. Ending

> So, this was my **Movie Project API**.

> In this project, I have used **Node.js, Express.js, MongoDB, Mongoose and dotenv**.

> I have implemented all the basic **CRUD operations** for movies.

> Through this project, I learned how to create APIs, connect MongoDB with Node.js and perform database operations using Mongoose.

> **Thank you.**
