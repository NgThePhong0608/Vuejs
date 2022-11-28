import Vue from "vue";
import VueRouter from "vue-router";
/* eslint-disable no-unused-vars */
Vue.use(VueRouter);
import Login from "../components/User/Login.vue";
import Footer from "../components/Footer/Footer.vue";
import Register from "../components/User/Register.vue";
import Details from "../components/Body/Details.vue";
import Profile from "../components/User/Profile.vue";
import ContactForm from "@/views/Contact/ContactForm.vue";
import ContactList from "@/views/Contact/ContactList.vue";
import Category from "@/views/Category/Category.vue";
import News from "@/views/News/News.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
	{
		path: "/home",
		component: Details,
		name: "Home",
		meta: { title: "Home | CodLUCK" },
	},
	{
		path: "/footer",
		component: Footer,
		name: "Footer",
		meta: { title: "Footer | CodLUCK" },
	},
	{
		path: "/About",
		component: About,
		name: "About",
		meta: { title: "About | CodLUCK" },
	},
	{
		path: "/login",
		component: Login,
		name: "Login",
		meta: { title: "Login | Cod LUCK" },
	},

	{
		path: "/register",
		component: Register,
		name: "Register",
		meta: { title: "Register | CodLUCK" },
	},
	{
		path: "/category",
		component: Category,
		name: "Category",
		meta: { title: "Category | CodLUCK" },
	},
	{
		path: "/profile",
		component: Profile,
		name: "Profile",
	},
	{
		path: "/profile/:id",
		component: Profile,
		name: "Profile",
		meta: { title: "Profile | CodLUCK" },
	},
	{
		path: "/contact",
		component: ContactForm,
		meta: { title: "Contact | CodLUCK" },
	},
	{
		path: "/news",
		component: News,
		meta: { title: "News | CodLUCK" },
	},
	{
		path: "/contactList",
		component: ContactList,
		meta: { title: "Contact | CodLUCK" },
	},
	{
		path: "/contactList/:id",
		name: "contact",
		component: ContactList,
		meta: { title: "Contact | CodLUCK" },
	},
	{
		path: "/contactForm",
		component: ContactForm,
		name: "Contact Form",
		meta: { title: "Contact | CodLUCK" },
	},
	{
		path: "/:pathMatch(.*)*",
		component: NotFound,
		name: "NotFound",
		meta: { title: "Not Found | CodLUCK" },
	},
];
const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
