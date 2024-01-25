import React from "react";

const Card = ({ data }) => {
	return (
        <div>
            <div>
                <img src={data.img} alt={data.title}></img>
                <p>-{data.discount}%</p>
            </div>
            <div>
                <p>{data.tag}</p>
                <p>{data.price}</p>
            </div>
        </div>
    )
};

export default Card;
