import axios from "axios";

axios.defaults.baseURL =
  // process.env.NODE_ENV !== "production" ? "http://localhost:5001" : "/";
  process.env.NODE_ENV !== "production"
    ? "https://foodrush-backend-sert.onrender.com"
    : "/";

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Axios Base URL:", axios.defaults.baseURL);
// process.env.NODE_ENV !== "production"
// ? "https://food-rush-backend.vercel.app"
//   : "https://food-rush-backend.vercel.app";

//"https://food-rush-backend.vercel.app"
