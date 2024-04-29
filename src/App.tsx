import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import LoginRootLayout from "./components/Layouts/LoginRootLayout/LoginRootLayout";

import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { HelpPage } from "./Pages/HelpPage/HelpPage";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				index: true,
				element: (
					<div>
						<header>
							<Link to="login">Login Page</Link>
						</header>
						<div>Hello World</div>
					</div>
				),
			},
			{
				path: "login",
				//LoginRootLayout so all pages withing login rout have the same cenetered square layout
				element: <LoginRootLayout />,
				children: [
					{
						index: true,
						element: <LoginPage />,
					},
					{
						path: "help",
						element: <HelpPage />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
