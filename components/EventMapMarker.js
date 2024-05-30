import { MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState } from "react";

export default function EventMapMarker({ item }) {
	const map = useMap();
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = (e) => {
		map.panTo(e.getPosition());
		setIsVisible((prevIsVisible) => !prevIsVisible);
	};

	const handleBlur = (e) => {
		setIsVisible(false);
	};

	return (
		<MapMarker
			key={item.id}
			position={{ lat: item.lat, lng: item.lng }}
			onClick={handleClick}
			onMouseOut={handleBlur}
		>
			{isVisible ? (
				<div>
					<h1>hello</h1>
				</div>
			) : null}
		</MapMarker>
	);
}
