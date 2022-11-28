<template>
	<div>
		<Header></Header>
		<div class="about-header">
			<h1>Lĩnh Vực Kinh Doanh</h1>
			<el-image :src="src1"></el-image>
		</div>
		<div class="about-container">
			<el-row>
				<el-col :span="12">
					<div>
						<el-image :src="src"></el-image>
					</div>
				</el-col>
				<el-col :span="12" style="padding-left: 17px">
					<div>
						<h1>Đội Ngũ Của Chúng Tôi</h1>
						<p>
							CodLuck Technology., JSC (CodLUCK) là công ty được
							thành lập bởi đội ngũ kỹ sư có hàng chục năm kinh
							nghiệm trong việc phát triển, quản lý và vận hành
							các hệ thống phần mềm cho thị trường Nhật Bản, ASEAN
							và Việt Nam.
						</p>
						<p>
							Chúng tôi là tập hợp những con người luôn khao khát
							xây dựng một tập thể vững mạnh, cầu tiến, cầu thị,
							nhằm mang đến cho khách hàng những dịch vụ tốt nhất
							và sự tư vấn tận tình nhất.
						</p>
						<p>
							Nếu Doanh Nghiệp của bạn đang tìm một giải pháp chăm
							sóc khách hàng tối ưu hay mong muốn đưa công nghệ
							vào bộ máy vận hành thì CodLUCK tự tin rằng có thể
							cung cấp những dịch vụ & sản phẩm phù hợp và dễ dàng
							sử dụng.
						</p>
						<p>
							Nếu bạn là một sinh viên đang học ngành Công nghệ
							thông tin, hoặc bạn vừa mới ra trường và muốn tìm
							một môi trường làm việc năng động, cởi mở, CodLUCK
							luôn đón chào tất cả các bạn!
						</p>
						<el-button type="primary">
							<router-link to="/contact">Liên Hệ</router-link>
						</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
export default {
	data() {
		return {
			src: "https://codluck.com/wp-content/uploads/2021/03/team-yeah.jpg",
			src1: "https://codluck.com/wp-content/uploads/2021/07/Them-tieu-de-phu-1.png",
		};
	},
	components: {
		Header,
	},
};
</script>

<style>
.about-container {
	width: 70%;
	margin: 0 auto;
}

.about-header {
	text-align: center;
}
</style>
