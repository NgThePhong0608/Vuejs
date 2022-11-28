import http from "@/plugins/api";
// import { authHeaders } from '@/utils/auth';

class NewsService {
	async getList() {
		try {
			const res = await http.get("/news");
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
	async create(data) {
		try {
			const res = await http.post("/news/create", data);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async update(data) {
		try {
			const res = await http.post("/news/update", data);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async detail(id) {
		try {
			const res = await http.get(`/news/detail/${id}`);
			return res?.data;
		} catch (err) {
			return await Promise.reject(err);
		}
	}
	async delete(id) {
		try {
			const res = await http.post(`/news/delete/${id}`);
			return res?.message;
		} catch (err) {
			return await Promise.reject(err);
		}
	}

	async nextPage(page) {
		try {
			return await http.get(`/news?page=${page}`);
		} catch (err) {
			return await Promise.reject(err);
		}
	}
}

const newsService = new NewsService();

export default newsService;
