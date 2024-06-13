import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
	return (
		<div className={styles.header}>
			<Link className={styles.header__homebtn_icon} href="/">
				<FontAwesomeIcon icon={faHome} />
			</Link>

			<Link className={styles.header__userbtn_icon} href="/login">
				<FontAwesomeIcon icon={faUser} />
			</Link>
		</div>
	);
}
