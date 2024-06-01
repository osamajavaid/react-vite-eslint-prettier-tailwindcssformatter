import { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFoundPage from "../components/common/PageNotFound";
import PrimaryLayout from "../layout/PrimaryLayout";

import { routes } from "./routes";

export default function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<h1>Loading....</h1>}>
				<Routes>
					{routes.map((route, id) => (
						<Route key={route.path} path="/" element={<PrimaryLayout />}>
							<Route
								index
								key={id}
								path={`/${route.path}`}
								element={
									<Suspense fallback={<h1>Loading....</h1>}>
										{route.element}
									</Suspense>
								}
							/>
						</Route>
					))}
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
