import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

import Form from "../Forms/Form";
import { FormField, Button } from "semantic-ui-react";
import { SectionContainerLayout } from "../Layouts/SectionContainerLayout/SectionContainerLayout";

import { ErrorData, LoginData } from "./interfaces";



interface Props {
	submitHandler: (e: FormEvent<HTMLFormElement>) => void;
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	loginData: LoginData;
	errorData: ErrorData;
}

const LoginScreen = ({
	submitHandler,
	changeHandler,
	loginData,
	errorData,
}: Props) => {
	return (
		//SectionContainerLayout's are wrappers with default styles
		<SectionContainerLayout>
			<h2>Log In</h2>
			<Form onSubmit={submitHandler} size="large" errorData={errorData}>
				<FormField>
					<label>Email</label>
					<input
						type="email"
						name="email"
						required
						placeholder="joe@email.com"
						value={loginData.email}
						onChange={changeHandler}
					/>
				</FormField>
				<FormField>
					<label>Password</label>
					<input
						type="password"
						name="password"
						autoComplete="false"
						required
						placeholder="Enter your password"
						value={loginData.password}
						onChange={changeHandler}
					/>
					<Link to={`?mode=forgotPassword`}>Forgot Password?</Link>
				</FormField>
				<Button fluid size="huge">
					Login
				</Button>
			</Form>
		</SectionContainerLayout>
	);
};
export default LoginScreen;
