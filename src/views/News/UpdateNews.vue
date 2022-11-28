<template>
	<div>
		<el-dialog
			:visible.sync="this.dialogFormVisible"
			title="Update Category"
		>
			<el-form>
				<el-form-item label="Category ID" :label-width="formLabelWidth">
					<el-select
						v-model="newEdit.category_id"
						class="m-2"
						placeholder="Select"
					>
						<el-option
							v-for="item in category.data"
							:key="item.id"
							:label="item.name"
							:value="item.id"
						/>
					</el-select>
				</el-form-item>
				<el-form-item label="Title" :label-width="formLabelWidth">
					<el-input v-model="newEdit.title" autocomplete="off" />
				</el-form-item>
				<el-form-item label="Content" :label-width="formLabelWidth">
					<el-input v-model="newEdit.content" autocomplete="off" />
				</el-form-item>
				<el-form-item label="File" :label-width="formLabelWidth">
					<input type="file" hidden ref="imageOld" />
					<input
						type="file"
						accept="image/*"
						ref="image"
						v-on:change="onFileSelected"
					/>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogFormVisible = !dialogFormVisible"
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
export default {
	data() {
		return {
			dataUpdate: {
				id: "",
				category_id: "",
				content: "",
				title: "",
				image: "",
			},
			formLabelWidth: "120px",
		};
	},
	props: {
		dialogFormVisible: { type: Boolean, default: false },
		category: [],
		newEdit: { type: Object, default: null },
	},
	methods: {
		show() {
			this.dialogFormVisible = true;
		},
		onFileSelected(e) {
			this.dataUpdate.image = e.target.files[0];
		},
		submit() {
			this.dataUpdate.id = this.newEdit.id;
			this.dataUpdate.category_id = this.newEdit.category_id;
			this.dataUpdate.content = this.newEdit.content;
			this.dataUpdate.title = this.newEdit.title;
			this.$emit("dataUpdate", this.dataUpdate);
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

1
