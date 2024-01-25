import React from "react";

const Promotion = ({ data }) => {
	return (
		<div>
        <img src={data.background} alt={data.title}></img>
			<p>{data.day}</p>
			<h3>{data.title}</h3>
			<div>
				<p>{data.discount}</p>
				<p>{data.price}</p>
			</div>
		</div>
	);
};

export default Promotion;
