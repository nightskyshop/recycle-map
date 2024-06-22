import Header from "@/components/Header";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
	const successHandler = (response) => {
		console.log(response.coords);
		const { latitude, longitude } = response.coords;

		localStorage.setItem("latitude", latitude);
		localStorage.setItem("longitude", longitude);
	};

	const errorHandler = (error) => {
		console.log(error);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
	});

	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
