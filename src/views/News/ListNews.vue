<template>
	<div class="container">
		<div class="row">
			<div style="margin-left: 4%" class="col-md-12">
				<AddNews :category="categories" @inputData="postNew"></AddNews>
				<UpdateNews
					:newEdit="this.newUpdate"
					:category="categories"
					:dialogFormVisible="this.dialogFormVisible"
					@dataUpdate="dataUpdate"
				></UpdateNews>
				<el-table :data="news.data" style="width: 100%">
					<el-table-column label="Title" prop="title" />
					<el-table-column label="Date" prop="created_at" />
					<el-table-column label="Image" width="200">
						<template #default="scope">
							<img style="width: 100%" :src="scope.row.image" />
						</template>
					</el-table-column>
					<el-table-column align="right">
						<template #header>
							<el-input
								v-model="search"
								size="small"
								placeholder="Type to search"
							/>
						</template>
						<template #default="scope">
							<el-button
								size="small"
								@click="
									showUpdateForm(
										scope.row.id,
										scope.row.category_id,
										scope.row.content,
										scope.row.title,
										scope.row.image
									)
								"
								>Edit</el-button
							>
							<el-button
								size="small"
								type="danger"
								@click="deleteNew(scope.row.id)"
							>
								Delete
							</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div>Total News: {{ news.total }}</div>
				<el-pagination
					background
					layout="prev, pager, next"
					:total="news.total"
					@current-change="handleCurrentChangePage"
				>
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import newsService from "@/services/news";
import categoryService from "@/services/category";
import AddNews from "./AddNews.vue";
import UpdateNews from "./UpdateNews.vue";

export default {
	data() {
		return {
			news: [],
			categories: [],
			dialogFormVisible: false,
			newUpdate: {
				id: "",
				category_id: "",
				content: "",
				title: "",
				image: "",
			},
			search: "",
		};
	},

	created() {
		this.getCategory();
		this.getNew();
	},

	methods: {
		getNew() {
			newsService
				.getList()
				.then((res) => {
					this.news = res;
				})
				.catch((err) => {
					console.log(err);
				});
		},

		getCategory() {
			categoryService
				.getList()
				.then((res) => {
					this.categories = res;
					console.log("cate", this.categories);
				})
				.catch((err) => {
					console.log(err);
				});
		},

		postNew(dataNew) {
			newsService
				.create(dataNew)
				.then((res) => {
					console.log(res);
					this.getNew();
				})
				.catch((error) => {
					console.log(error);
				});
		},

		showUpdateForm(id, category_id, content, title, image) {
			this.dialogFormVisible = true;
			this.newUpdate.id = id;
			this.newUpdate.category_id = category_id;
			this.newUpdate.content = content;
			this.newUpdate.title = title;
			this.newUpdate.image = image;
		},

		dataUpdate(dataUpdate) {
			newsService
				.update(dataUpdate)
				.then((res) => {
					console.log(res);
					this.getNew();
				})
				.catch((err) => {
					console.log(err);
				});
		},

		findByID(id) {
			this.search = id;
			return this.news.find((news) => news.id === id);
		},

		findByName(name) {
			this.search = name;
			return this.news.find((news) => news.name === name);
		},
		async deleteNews(id) {
			if (confirm("Are you sure you want to delete this news?")) {
				try {
					const response = await newsService.delete(id);
					this.getNew();
				} catch (error) {
					console.log(error);
				}
			}
		},

		handleCurrentChangePage(page) {
			newsService.nextPage(page).then((res) => {
				this.news = res.data;
				console.log(res);
			});
		},
	},

	components: {
		AddNews,
		UpdateNews,
	},
};
</script>

<style scoped>
.parent {
	position: relative;
}
.child {
	position: absolute;
	top: 50%;
	left: 5%;
}
</style>
