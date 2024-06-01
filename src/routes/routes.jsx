import { lazy } from "react";

// Home imports
const Home = lazy(() => import("../pages/Home"));

// About imports
const About = lazy(() => import("../pages/About"));

// Services imports
const Services = lazy(() => import("../pages/services/Services"));
const ServiceDetail = lazy(() => import("../pages/services/ServiceDetail"));

// ================================================================================================
// exporting all routes
// ================================================================================================
export const routes = [
	{
		path: "/",
		element: <Home />,
		isPrivate: true,
	},
	{
		path: "/about",
		element: <About />,
		isPrivate: true,
	},
	{
		path: "/Services",
		element: <Services />,
		isPrivate: true,
	},
	{
		path: "/Services/service/:id",
		element: <ServiceDetail />,
		isPrivate: true,
	},
];
