import Header from "@/components/Header";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
	const createCookie = (value) => {
		var now = new Date();
		var expirationDate = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() + 14,
			0,
			0,
			0
		);

		document.cookie =
			"token=" + value + "; expires=" + expirationDate + "; path=/";
	};

	const successHandler = (response) => {
		const { latitude, longitude } = response.coords;

		localStorage.setItem("latitude", latitude);
		localStorage.setItem("longitude", longitude);
	};

	const errorHandler = (error) => {
		console.log(error);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
	}, []);

	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
