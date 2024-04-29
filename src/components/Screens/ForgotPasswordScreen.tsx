import { ChangeEvent, FormEvent } from "react";

import Form from "../Forms/Form";
import { Link } from "react-router-dom";
import { FormField, Button } from "semantic-ui-react";
import { SectionContainerLayout } from "../Layouts/SectionContainerLayout/SectionContainerLayout";

import { ErrorData, LoginData } from "./interfaces";

interface Props {
	submitHandler: (e: FormEvent<HTMLFormElement>) => void;
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	loginData: LoginData;
	errorData: ErrorData;
}

const ForgotPasswordScreen = ({
	submitHandler,
	changeHandler,
	loginData,
	errorData,
}: Props) => {
	return (
		// SectionContainerLayout's are wrappers with default styles
		<SectionContainerLayout>
			<h2>Forgot Password</h2>
			<p>Please enter your e-mail to reset your password.</p>
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
				<Button fluid size="huge">
					Send Password
				</Button>
			</Form>
			<Link to={`?mode=login`}>Sign In</Link>
		</SectionContainerLayout>
	);
};

export default ForgotPasswordScreen;
