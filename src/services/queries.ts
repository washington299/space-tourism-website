import { api } from "services/config";

export const QUERY = {
	getDestinations: () => api.get("/api/destinations"),
};