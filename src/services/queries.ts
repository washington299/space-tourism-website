import { api } from "services/config";

export const QUERY = {
	getDestinations: () => api.get("/api/destinations"),
	getCrews: () => api.get("/api/crews"),
	getTechnology: () => api.get("/api/technology"),
};
