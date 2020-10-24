import React, { useRef, useState } from "react";
import "./buttonRipple.scss";

function ButtonRipple(props) {
	const [ripples, setRipples] = useState([]);
	const btnEl = useRef(null);

	const addRipple = (e) => {
		let positionX = e.clientX - e.target.offsetLeft;
		let positionY = e.clientY - e.target.offsetTop;
		setRipples([...ripples, { style: { top: positionX, left: positionY } }]);
	};

	const renderRipples = () => {
		if (ripples.length > 0) {
			return ripples.map((el) => (
				<span className="ripple-effect" style={el.style}></span>
			));
		}
	};

	const handleClick = (e) => {
		e.preventDefault();
		// addRipple(e);
		// setTimeout(() => {
		//   setRipples([...ripples].shift());
		// }, 1000)
	};

	return (
		<>
			<button
        disabled={props.disabled || false }
				ref={btnEl}
				onClick={(e) => handleClick(e)}
				type="submit"
			> 
				Sign In
			</button>
			{renderRipples()}
		</>
	);
}

export default ButtonRipple;
