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
import axiosInstance from "@/lib/axios";

export default function Home() {
	const [location, setLoacation] = useState(null);
	const [recycledItems, setRecycledItems] = useState();
	const [post, setPost] = useState();
	const [id, setId] = useState();

	const getRecycledItems = async () => {
		const { data } = await axiosInstance.get("/admin/all_point");

		setRecycledItems(data);
	};

	useEffect(() => {
		const latitude = localStorage.getItem("latitude");
		const longitude = localStorage.getItem("longitude");

		setLoacation({ latitude, longitude });

		getRecycledItems();
	}, []);

	const getPost = async () => {
		const { data } = await axiosInstance.get(`/point/${id}`);
		setPost(data);
	};

	useEffect(() => {
		if (id) {
			getPost();
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

				<Link className={styles.main__allbtn_icon} href="/trash">
					<FontAwesomeIcon icon={faList} /> 쓰레기 분리수거 방법 보기
				</Link>

				<Link className={styles.main__rankbtn_icon} href="/rank">
					<FontAwesomeIcon icon={faRankingStar} />
					분리수거 랭킹 보기
				</Link>

				{location ? (
					recycledItems ? (
						<div>
							<h1 className={styles.main__today_point}>오늘의 포인트: </h1>
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
						</div>
					) : (
						<p>지도 로딩중...</p>
					)
				) : (
					<p>지도 로딩중...</p>
				)}

				{post ? <Post post={post} /> : null}

				<Link className={styles.main__createbtn_icon} href="/trash/create">
					<FontAwesomeIcon icon={faPen} /> 쓰레기 분리수거 인증 올리기
				</Link>
			</main>
		</>
	);
}
