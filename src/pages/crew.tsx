import data from "utils/data";

import { CrewTemplate } from "templates/Crew";

const Crew = () => {
	return <CrewTemplate crew={data.crew} />;
};

export default Crew;
