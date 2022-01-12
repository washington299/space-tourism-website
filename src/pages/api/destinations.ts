import { NextApiRequest, NextApiResponse } from "next";

import data from "../../../data.json";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(data.destinations);
}
