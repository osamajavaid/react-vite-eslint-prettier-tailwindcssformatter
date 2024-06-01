import React from "react";

import { Link, Outlet } from "react-router-dom";

export default function PrimaryLayout() {
	return (
		<main className="">
			<nav className="flex items-center justify-between bg-gray-500 px-20 py-8">
				<div className="">logo</div>
				<div className="flex gap-x-4">
					<Link
						className="cursor-pointer hover:text-blue-400 hover:underline"
						to="/"
					>
						Home
					</Link>
					<Link
						className="cursor-pointer hover:text-blue-400 hover:underline"
						to="/about"
					>
						About us
					</Link>
				</div>
			</nav>
			<div className="px-20">
				<Outlet />
			</div>
			<footer className="px-20">my footer component</footer>
		</main>
	);
}
