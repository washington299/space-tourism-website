import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") baseURL = "http://localhost:3000";
if (process.env.NODE_ENV === "production") baseURL = "https://space-tourism.vercel.app";

export const api = axios.create({
	baseURL,
});
