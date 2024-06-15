import { MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState } from "react";

export default function EventMapMarker({ item, setId }) {
	const map = useMap();

	const handleClick = (e) => {
		map.panTo(e.getPosition());
		setId(item.id);
	};

	return (
		<MapMarker
			key={item.id}
			position={{ lat: item.lat, lng: item.lng }}
			onClick={handleClick}
		/>
	);
}
