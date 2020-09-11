import React from 'react';
import './box.css';

function Box({ bgColor, index, onclick, checkColors }) {
	return (
		<button
			className="box"
			type="button"
			name={index}
			value={bgColor}
			style={{ backgroundColor: bgColor }}
			onClick={(e) => {
				onclick(e);
				checkColors(e);
			}}
		/>
	);
}

export default Box;
