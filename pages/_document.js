import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3bb4528302a32364431bcf5c9dce8548&libraries=services,clusterer&autoload=false"
					strategy="beforeInteractive"
				/>
			</body>
		</Html>
	);
}
