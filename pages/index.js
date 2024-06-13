import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import { Map } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import EventMapMarker from "@/components/EventMapMarker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faList,
	faPen,
	faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Post from "@/components/Post";

export default function Home() {
	const [location, setLoacation] = useState(null);
	const [post, setPost] = useState();
	const [id, setId] = useState();

	const recycledItems = [
		{
			id: 1,
			title: "Mega IT 강남 캠퍼스",
			address: "서울 강남구 강남대로94길",
			lat: 37.4994331757035,
			lng: 127.027938127133,
		},
		{
			id: 2,
			title: "우리집",
			address: "서울특별시 양천구 목동중앙남로 16나길 74",
			lat: 37.5457245393347,
			lng: 126.86467947697,
		},
	];

	const posts = [
		{
			id: 1,
			title: "Mega IT 강남 캠퍼스",
			address: "서울 강남구 강남대로94길",
			lat: 37.4994331757035,
			lng: 127.027938127133,
			createdAt: "2024년 5월 29일",
			img: [
				"https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
				"https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
			],
		},
		{
			id: 2,
			title: "우리집",
			address: "서울특별시 양천구 목동중앙남로 16나길 74",
			lat: 37.5457245393347,
			lng: 126.86467947697,
			createdAt: "2024년 5월 30일",
			img: [
				"https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13262118&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNi82MmZhMWExMy03ZjRmLTQ1NWMtYTZlNy02ZTk2YjhjMjBkYTk=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgFTcjGd_nLRN20-7zSqLGPxZ0j7aijBR0A&s",
			],
		},
	];

	useEffect(() => {
		const latitude = localStorage.getItem("latitude");
		const longitude = localStorage.getItem("longitude");

		setLoacation({ latitude, longitude });
	}, []);

	useEffect(() => {
		if (id) {
			setPost(posts[id - 1]);
		}
	}, [id]);

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
					<FontAwesomeIcon icon={faList} /> 쓰레기 분리수거 방법 보기
				</Link>

				<Link className={styles.main__rankbtn_icon} href="/rank">
					<FontAwesomeIcon icon={faRankingStar} />
					분리수거 랭킹 보기
				</Link>

				{location ? (
					<Map
						center={{ lat: location.latitude, lng: location.longitude }}
						style={{
							width: "100%",
							height: "600px",
						}}
						level={3}
					>
						{recycledItems.map((item) => (
							<EventMapMarker key={item.id} item={item} setId={setId} />
						))}
					</Map>
				) : (
					<p>지도 로딩중...</p>
				)}

				{post ? <Post post={post} /> : null}

				<Link className={styles.main__createbtn_icon} href="/item/create">
					<FontAwesomeIcon icon={faPen} /> 쓰레기 분리수거 인증 올리기
				</Link>
			</main>
		</>
	);
}
