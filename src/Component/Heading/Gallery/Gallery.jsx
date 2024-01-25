import React from "react";
import Card from "../../Card/Card";

const Gallery = ({ data }) => {
	return data.map((item, index) => (
		<div>
			<Card data={item.card} key={index}></Card>
		</div>
	));
};

export default Gallery;
