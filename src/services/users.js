import http from "@/plugins/api";
// import { authHeaders } from '@/utils/auth';

class UserService {
	async getListUser() {
		try {
			const res = await http.get("/users");
			return res?.data?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async update(data) {
		try {
			const res = await http.post("/users/update", data);
			return res?.data?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async detail(id) {
		try {
			const res = await http.get(`users/detail/${id}`);
			return res?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async delete(id) {
		try {
			const res = await http.post(`/users/delete/${id}`);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
}

const userService = new UserService();

export default userService;
