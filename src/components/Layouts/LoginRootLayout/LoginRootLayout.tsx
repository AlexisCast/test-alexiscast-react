import { Outlet } from "react-router-dom";

import classes from "./LoginRootLayout.module.css";

const LoginRootLayout = () => {
	return (
		<main className={classes.Content}>
			<Outlet />
		</main>
	);
};

export default LoginRootLayout;
