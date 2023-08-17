import React from "react";
import SpreadComponent from "../global/SpreadComponents";

const Homepage = ({ data }: { data: any }) => {
	return (
		<div>
			<SpreadComponent components={data.components} />
		</div>
	);
};

export default Homepage;
