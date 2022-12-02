<template>
	<div class="container">
		<div class="row">
			<div style="margin-left: 4%" class="col-md-12">
				<AddCategory @inputData="postData"></AddCategory>
				<UpdateCategory
					:categoryEdit="category"
					:dialogFormVisible="this.dialogFormVisible"
					@dataUpdate="dataUpdate"
				></UpdateCategory>
				<el-table :data="this.categories" style="width: 100%">
					<el-table-column label="Date" prop="created_at" />
					<el-table-column label="Name" prop="name" />
					<el-table-column label="Update Date" prop="updated_at" />
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
									showEditForm(scope.row.id, scope.row.name)
								"
								><i class="el-icon-edit">
									<b> Edit</b>
								</i>
							</el-button>
							<el-button
								size="small"
								type="danger"
								@click="deleteCategory(scope.row.id)"
								><i class="el-icon-delete"><b> Delete</b></i>
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
import categoryService from "@/services/category";
import AddCategory from "./AddCategory.vue";
import UpdateCategory from "./UpdateCategory.vue";
export default {
	created() {
		this.getCategory();
	},
	data() {
		return {
			dialogFormVisible: false,
			category: { id: "", name: "" },
			categories: [],
			search: "",
		};
	},
	methods: {
		async showEditForm(id, name) {
			this.dialogFormVisible = !this.dialogFormVisible;
			this.category.id = id;
			this.category.name = name;
		},
		async getCategory() {
			const response = await categoryService.getList();
			this.categories = response;
			console.log("cate", this.categories);
			return this.categories;
		},
		postData(name) {
			categoryService
				.create(name)
				.then((res) => {
					console.log(res);
					this.getCategory();
				})
				.catch((error) => {
					console.log(error);
				});
		},
		dataUpdate(dataUpdate) {
			categoryService
				.update(dataUpdate)
				.then((res) => {
					console.log(res);
					this.getCategory();
				})
				.catch((error) => {
					console.log(error);
				});
		},
		async deleteCategory(id) {
			if (confirm("Are you sure you want to delete this category?")) {
				try {
					const response = await categoryService.delete(id);
					this.msg = response.msg;
					this.getCategory();
				} catch (error) {
					console.log(error);
				}
			}
		},

		findByID(id) {
			this.search = id;
			return this.categories.find((category) => category.id === id);
		},

		findByName(name) {
			return this.categories.find((category) => category.name === name);
		},
	},
	components: {
		AddCategory,
		UpdateCategory,
	},
	watch: {},
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
