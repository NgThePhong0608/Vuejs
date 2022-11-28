import http from "@/plugins/api";
// import { authHeaders } from '@/utils/auth';

class CategoryService {
	async getList() {
		try {
			const res = await http.get("/categories");
			return res?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async getListNewsCategory(category_id) {
		try {
			const res = await http.post(
				"/news/list-news-category",
				category_id
			);
			return res?.data?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async create(name) {
		try {
			const res = await http.post("/categories/create", { name });
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async update(data) {
		try {
			const res = await http.post("/categories/update", data);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async detail(id) {
		try {
			const res = await http.get(`categories/detail/${id}`);
			return res?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async delete(id) {
		try {
			const res = await http.post(`/categories/delete/${id}`);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
}

const categoryService = new CategoryService();

export default categoryService;
