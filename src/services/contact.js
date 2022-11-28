import http from "@/plugins/api";
// import { authHeaders } from '@/utils/auth';

class ContactService {
	async getList() {
		try {
			const res = await http.get("/contacts");
			return res?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async create(data) {
		try {
			const res = await http.post("/contacts/create",  data );
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async update(data) {
		try {
			const res = await http.post("/contacts/update", data);
			console.log(res.message);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async detail(id) {
		try {
			const res = await http.get(`/contacts/detail/${id}`);
			return res?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async delete(id) {
		try {
			const res = await http.post(`/contacts/delete/${id}`);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
}

const contactService = new ContactService();

export default contactService;
