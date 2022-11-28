<template>
	<div>
		<a href="/footer"></a>
		<Header></Header>
		<div class="footer-container">
			<HeaderFooter></HeaderFooter>
			<FooterDetails></FooterDetails>
			<LastDetails></LastDetails>
		</div>
	</div>
</template>

<script>
import FooterDetails from "./FooterDetails.vue";
import HeaderFooter from "./HeaderFooter.vue";
import LastDetails from "../Body/LastDetails.vue";
import Header from "../Header/Header.vue";
export default {
	components: {
		FooterDetails,
		HeaderFooter,
		LastDetails,
		Header,
	},
};
</script>

<style>
.footer-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
</style>
