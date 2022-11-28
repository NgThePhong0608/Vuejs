import http from "@/plugins/api";

class AuthService {
	async login({ email, password }) {
		try {
			const res = await http.post("/login", {
				email: email,
				password,
			});
			return res?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	register({ email, password, name, c_password }) {
		return http
			.post("/register", {
				email,
				password,
				name,
				c_password,
			})
			.then((res) => {
				console.log(res);
			});
	}

	async logout() {
		try {
			const res = await http.post("/logout");
			console.log(res.message);
			return res?.message;
		} catch (err) {
			console.log(err.message);
			return await Promise.reject(err);
		}
	}
}

const authService = new AuthService();

export default authService;
