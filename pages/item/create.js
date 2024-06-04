import { faCamera, faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "@/styles/ItemCreate.module.css";

export default function ItemCreate() {
	const webRef = useRef(null);
	const [mirrored, setMirrored] = useState(false);
	const [imageBase64, setImageBase64] = useState("");

	const videoConstraints = {
		width: 450,
		height: 450,
		facingMode: "environment",
	};

	const handleCameraClick = () => {
		console.log(webRef.current.getScreenshot());
		setImageBase64(webRef.current.getScreenshot());
	};

	const handleMirroredClick = () => {
		setMirrored((prevMirrored) => !prevMirrored);
	};

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
