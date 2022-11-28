import createPersistedState from "vuex-persistedstate";
import Vue from "vue";
import Vuex from "vuex"; // Import modules
import auth from "../store/modules/authorization/auth";

Vue.use(Vuex);

const storeData = {
	modules: {
		auth,
	},
	plugins: [
		createPersistedState({
			paths: "auth.user", // lấy state user trong vuex modules auth
			key: "master_user",
		}),
	],
};
const store = new Vuex.Store(storeData);
export default store;
