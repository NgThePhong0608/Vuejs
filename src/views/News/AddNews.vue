<template>
	<div>
		<!-- Form -->
		<el-button class="btn btn-primary" @click="() => show()">
			Add New
		</el-button>
		<el-dialog :visible.sync="dialogFormVisible" title="Add New">
			<el-form>
				<el-form-item label="Category ID" :label-width="formLabelWidth">
					<el-select
						v-model="dataNew.category_id"
						placeholder="Select"
					>
						<el-option
							v-for="item in category"
							:key="item.id"
							:label="item.name"
							:value="item.id"
						/>
					</el-select>
				</el-form-item>
				<el-form-item label="Title" :label-width="formLabelWidth">
					<el-input v-model="dataNew.title" autocomplete="off" />
				</el-form-item>
				<el-form-item label="Content" :label-width="formLabelWidth">
					<el-input v-model="dataNew.content" autocomplete="off" />
				</el-form-item>
				<el-form-item label="File" :label-width="formLabelWidth">
					<input
						type="file"
						ref="file"
						v-on:change="onFileSelected"
					/>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogFormVisible = false"
						>Cancel</el-button
					>
					<el-button type="primary" @click="submit"
						>Confirm</el-button
					>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	name: "AddNews",
	data() {
		return {
			dialogFormVisible: false,
			dataNew: { category_id: "", title: "", image: null, content: "" },
			selectedFile: "",
			value: ref(""),
			formLabelWidth: "120px",
		};
	},
	props: {
		category: [],
	},
	methods: {
		onFileSelected(e) {
			// this.dataNew.image = e.target.files[0];
			const image = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onload = (e) => {
				this.dataNew.image = e.target.result;
				console.log(this.dataNew.image);
			};
		},
		show() {
			this.dialogFormVisible = !this.dialogFormVisible;
			console.log(this.category);
		},
		submit() {
			this.$emit("inputData", this.dataNew);
			this.dialogFormVisible = false;
		},
	},
};
</script>
<style scoped>
.el-button--text {
	margin-right: 15px;
}
.el-select {
	width: 300px;
}
.el-input {
	width: 300px;
}
.dialog-footer button:first-child {
	margin-right: 10px;
}
</style>
