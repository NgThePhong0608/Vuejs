export const authHeaders = (headers = {}) => {
	const token =
		!!localStorage.getItem("master_user") &&
		JSON.parse(localStorage.getItem("master_user"))?.auth?.user?.token;

	return token ? { Authorization: token, ...headers } : { ...headers };
};

export const getProfile = function () {
	return (
		localStorage.getItem("master_user") &&
		JSON.parse(localStorage.getItem("master_user"))?.auth?.user?.profile
	);
};

export const isLoggedIn = () => {
	return (
		!!localStorage.getItem("master_user") &&
		!!JSON.parse(localStorage.getItem("master_user"))?.auth?.user?.token
	);
};

export const isAdmin = () => {
	return (
		!!localStorage.getItem("master_user") &&
		JSON.parse(localStorage.getItem("master_user"))?.auth?.user?.profile
			?.role === 1
	);
};

export const removeAuthenticated = () => {
	localStorage.removeItem("master_user");
};