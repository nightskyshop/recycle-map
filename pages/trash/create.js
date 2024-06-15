import { faCamera, faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "@/styles/ItemCreate.module.css";
import axiosInstance from "@/lib/axios";
import Base64toFile from "@/lib/Base64toFile";
import AWS from "aws-sdk";
import { useRouter } from "next/router";
import SessionStorage from "@/lib/SessionStorage";

export default function ItemCreate() {
	const router = useRouter();

	const webRef = useRef(null);
	const [mirrored, setMirrored] = useState(false);
	const [imageBase64, setImageBase64] = useState("");
	const [file, setFile] = useState();
	const imageURL = `${Date.now()}.jpg`;

	const uploadFile = async () => {
		// S3 Bucket Name
		const S3_BUCKET = "recycle-map-bucket";

		// S3 Region
		const REGION = "ap-northeast-2";

		// S3 Credentials
		AWS.config.update({
			accessKeyId: process.env.NEXT_PUBLIC_ACCESSKEY,
			secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESSKEY,
		});
		const s3 = new AWS.S3({
			params: { Bucket: S3_BUCKET },
			region: REGION,
		});

		// Files Parameters

		const params = {
			Bucket: S3_BUCKET,
			Key: imageURL,
			Body: file,
		};

		// Uploading file to s3

		var upload = s3
			.putObject(params)
			.on("httpUploadProgress", (evt) => {
				// File uploading progress
				console.log(
					"Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
				);
			})
			.promise();

		await upload.then((err, data) => {
			console.log(err);
		});

		const latitude = localStorage.getItem("latitude");
		const longitude = localStorage.getItem("longitude");

		console.log(imageURL, latitude, longitude);

		const { data } = axiosInstance.post(
			"/point",
			{
				user_id: 1,
				lat: latitude,
				lng: longitude,
				image: `https://recycle-map-bucket.s3.ap-northeast-2.amazonaws.com/${imageURL}`,
			},
			{
				headers: {
					Authorization: `Bearer ${SessionStorage.getItem("accessToken")}`,
				},
			}
		);

		router.push("/");
	};

	const videoConstraints = {
		width: 450,
		height: 450,
		facingMode: "environment",
	};

	const handleCameraClick = async () => {
		const image = webRef.current.getScreenshot();
		setImageBase64(image);

		setFile(Base64toFile(image));
	};

	const handleMirroredClick = () => {
		setMirrored((prevMirrored) => !prevMirrored);
	};

	useEffect(() => {
		if (file) {
			uploadFile();
		}
	}, [file]);

	return (
		<div className={styles.create}>
			<div className={styles.camera}>
				<Webcam
					mirrored={mirrored}
					screenshotFormat="image/jpeg"
					height={450}
					width={450}
					ref={webRef}
					videoConstraints={videoConstraints}
				></Webcam>

				<div className={styles.camera__btns}>
					<button
						className={styles.camera__capture}
						onClick={handleCameraClick}
					>
						<FontAwesomeIcon icon={faCamera} />
					</button>

					<button
						className={styles.camera__mirrored}
						onClick={handleMirroredClick}
					>
						<FontAwesomeIcon icon={faLeftRight} />
					</button>
				</div>
			</div>

			<img alt="IMAGE" src={imageBase64} />
		</div>
	);
}
