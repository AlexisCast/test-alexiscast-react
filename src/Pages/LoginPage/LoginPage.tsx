import { ChangeEvent, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import PageLayout from "../../components/Layouts/PageLayout/PageLayout";
import SectionLayout from "../../components/Layouts/SectionLayout/SectionLayout";

import LoginScreen from "../../components/Screens/LoginScreen";
import ForgotPasswordScreen from "../../components/Screens/ForgotPasswordScreen";

import classes from "./LoginPage.module.css";
import viteLogo from "../../../public/vite.svg";

export const LoginPage = () => {
	//state data
	const [loginData, setLoginData] = useState({ email: "", password: "" });

	//state for errors
	const [error, setError] = useState({
		isError: false,
		header: "This is the Header Title",
		content: "This is the message to show",
	});

	//useSearchParams to know what screen to display
	const [searchParams] = useSearchParams();
	const isForgottenPass = searchParams.get("mode") === "forgotPassword";

	//handler to modify the loginData state
	const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setLoginData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	//handler to submit a request
	const submitHandler = () => {
		//TODO: some additional verification if needed for email or email

		console.log(loginData);
		if (!isForgottenPass) {
			console.log("send a request to login");
		} else {
			console.log("send a request to send email to reset password");
		}
		//when done reset loginData and navigate to another page
		// setLoginData({ email: "", password: "" });
		//if there is an error update error state
		setError({
			isError: true,
			header: "This is the Header Title",
			content: "This is the message to show",
		});
	};

	return (
		<PageLayout>
			{/* //SectionLayout's are wrappers with default styles and className to add aditional styles if needed */}
			<SectionLayout className={classes.SectionOne}>
				<img src={viteLogo} className="logo" alt="Vite logo" />
				<h2>CleanMyCars</h2>
				<p>India's first waterless car cleaning company</p>
			</SectionLayout>
			<SectionLayout className={classes.SectionTwo}>
				{/* Need Help will go to another page with ing login route */}
				<Link to="/login/help">Need Help?</Link>
				{/* conditional to show login screen or forgot screen */}
				{!isForgottenPass ? (
					<LoginScreen
						submitHandler={submitHandler}
						changeHandler={changeHandler}
						loginData={loginData}
						errorData={error}
					/>
				) : (
					<ForgotPasswordScreen
						submitHandler={submitHandler}
						changeHandler={changeHandler}
						loginData={loginData}
						errorData={error}
					/>
				)}
			</SectionLayout>
		</PageLayout>
	);
};
