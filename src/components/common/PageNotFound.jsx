import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<section className="grid h-screen place-items-center bg-gray-300">
			<div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
				<div className="mx-auto flex max-w-screen-sm flex-col gap-y-4 text-center">
					<h1 className="text-7xl font-extrabold tracking-tight text-gray-500 lg:text-9xl">
						404
					</h1>
					<p className="text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
						Something's missing.
					</p>
					<p className="text-primary-text-color text-lg font-light">
						Sorry, we can't find that page. You'll find lots to explore on the
						home page. "
					</p>
					<Link
						to="/"
						className="w-60 self-center rounded-lg bg-blue-400 px-6 py-2 text-white"
					>
						Back to Homepage
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFoundPage;
