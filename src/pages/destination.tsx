import data from "utils/data";

import { DestinationTemplate } from "templates/Destination";

const Destination = () => {
	return <DestinationTemplate destinations={data.destinations} />;
};

export default Destination;
