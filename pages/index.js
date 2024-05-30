import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import { Map } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import EventMapMarker from "@/components/EventMapMarker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
	const [location, setLoacation] = useState(null);

	const recycledItems = [
		{
			id: 1,
			title: "Mega IT 강남 캠퍼스",
			address: "서울 강남구 강남대로94길",
			lat: 37.4994331757035,
			lng: 127.027938127133,
		},
	];

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
	}, []);

	const successHandler = (response) => {
		console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
		const { latitude, longitude } = response.coords;
		setLoacation({ latitude, longitude });
	};

	const errorHandler = (error) => {
		console.log(error);
	};

	return (
		<>
			<Head>
				<title>Recycle Map</title>
				<meta
					name="description"
					content="Recycle Map that help you recycle things."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<SearchBar />

				<Link className={styles.main__allbtn_icon} href="/items">
					<FontAwesomeIcon icon={faPen} /> 쓰레기 분리수거 방법 보기
				</Link>

				{location ? (
					<Map
						center={{ lat: location.latitude, lng: location.longitude }}
						style={{ width: "100%", height: "600px" }}
						level={3}
					>
						{recycledItems.map((item) => (
							<EventMapMarker key={item.id} item={item} />
						))}
					</Map>
				) : (
					<p>지도 로딩중...</p>
				)}
			</main>
		</>
	);
}
