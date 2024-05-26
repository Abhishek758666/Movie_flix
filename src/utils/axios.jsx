import axios from "axios";

const Instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTkzNWYwM2Q0MmE4OTVjOWQ1ZDYyMmY5ZDA2OTFhYyIsInN1YiI6IjY2M2JlYmJmYWM3M2FkOGU2MDg4ODRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1GKhjwENkTpwAXxwBz7zS5EPd9EzLhsR7a0yZaCDED4",
  },
});

export default Instance;
