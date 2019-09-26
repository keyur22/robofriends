import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className="bg-lightest-blue pa2 ma2 shadow-5 grow br2">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robots"></img>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
};

export default Card;