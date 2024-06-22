import { faHome, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Header() {
	const [accessToken, setAccessToken] = useState();

	useEffect(() => {
		setAccessToken(sessionStorage.getItem("accessToken"));
	});

	return (
		<div className={styles.header}>
			<Link className={styles.header__homebtn_icon} href="/">
				<FontAwesomeIcon icon={faHome} />
			</Link>

			<div className={styles.header__userbtn_icon}>
				{accessToken ? (
					<>
						<Link href="/user">
							<FontAwesomeIcon icon={faUser} />
						</Link>

						<Link className={styles.userbtn__logout} href="/logout">
							<FontAwesomeIcon icon={faRightToBracket} />
						</Link>
					</>
				) : (
					<Link href="/login">
						<FontAwesomeIcon icon={faUser} />
					</Link>
				)}
			</div>
		</div>
	);
}
