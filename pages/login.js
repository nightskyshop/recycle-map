import axiosInstance from "@/lib/axios";
import styles from "@/styles/Form.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.currentTarget;
		const email = form.elements.namedItem("email").value;
		const password = form.elements.namedItem("password").value;

		const { data } = await axiosInstance.post("/login", { email, password });

		if (data) {
			sessionStorage.setItem("accessToken", data.access_token);
			localStorage.setItem("refreshToken", data.refresh_token);

			router.push("/");
		}
	};

	return (
		<div className={styles.main}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input name="email" type="email" placeholder="이메일" />
				<input name="password" type="password" placeholder="비밀번호" />
				<button>로그인</button>
			</form>

			<hr />

			<Link className={styles.other__btn} href="/signup">
				회원가입
			</Link>
		</div>
	);
}
