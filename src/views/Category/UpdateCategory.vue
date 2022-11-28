<template>
	<div>
		<el-dialog v-model="this.dialogFormVisible" title="Update Category">
			<el-form>
				<el-form-item label="Category Id" :label-width="formLabelWidth">
					<el-input v-model="categoryEdit.id" autocomplete="off" />
				</el-form-item>
				<el-form-item
					label="Category Name"
					:label-width="formLabelWidth"
				>
					<el-input v-model="categoryEdit.name" autocomplete="off" />
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
export default {
	data() {
		return {
			dataUpdate: { id: "", name: "" },
			formLabelWidth: "120px",
		};
	},
	props: {
		dialogFormVisible: { type: Boolean, default: false },
		categoryEdit: { type: Object, default: null },
	},
	methods: {
		show() {
			this.dialogFormVisible = true;
		},
		submit() {
			this.dataUpdate.id = this.categoryEdit.id;
			this.dataUpdate.name = this.categoryEdit.name;
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
