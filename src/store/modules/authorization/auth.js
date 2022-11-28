import authService from "@/services/auth"; // call axios
import { LOGIN, REGISTER, LOGOUT, REFRESH } from "@/constants/index"; // biến dùng chung các action
import { removeAuthenticated } from "@/utils/auth"; // xoas key localStorage == Logout

const auth = {
	namespaced: true,
	state: {
		user: "",
	},
	getters: {
		getUserProfile: (state) => state.user.profile,
		getUserName: (state) => state.user.profile.name,
		getUserEmail: (state) => state.user.profile.email,
		getUserRole: (state) => state.user.profile.name,
		getUserId: (state) => state.user.profile.id,
		getUserPassword: (state) => state.user.profile.password,
	},
	mutations: {
		[LOGIN](state, { user }) {
			state.user = user;
		},
		[LOGOUT](state) {
			state.user = "";
		},
		[REFRESH](state, { token }) {
			state.user.token = token;
		},
	},
	actions: {
		async getLogin({ commit }, { email, password }) {
			const data = await authService.login({ email, password });
			if (data && data.token && data.user) {
				commit(LOGIN, {
					user: { token: data.token, profile: data.user },
				});
			}
		},
		getLogout({ commit }) {
			console.log("logout");
			authService.logout().then((res) => {
				console.log(res);
				commit(LOGOUT);
				removeAuthenticated();
				// this.state.user.token = "";
				return res;
			});
		},
		register({ email, password, name, c_password }) {
			console.log(email, password, name, c_password);
			return authService.register({ email, password, name, c_password });
		},

		[REFRESH]({ commit }) {
			return authService.refresh().then((data) => {
				if (data && data.token) {
					commit(REFRESH, { token: data.token });
				}
			});
		},
	},
};

export default auth;
