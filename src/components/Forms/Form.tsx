
import { FormEvent, ReactNode } from "react";
import { Form as FormUI, Message } from "semantic-ui-react";

import { ErrorData } from "../Screens/interfaces";

import classes from "./Form.module.css";


interface FormProps {
	children?: ReactNode | ReactNode[];
	onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
	size?: "mini" | "tiny" | "small" | "large" | "big" | "huge" | "massive";
	error?: boolean;
	errorData: ErrorData;
}

export const Form = ({ children, errorData, ...props }: FormProps) => {
	const { isError, header, content } = errorData;
	return (
		<FormUI className={classes.Form} {...props} error={isError}>
			{children}
			<Message error header={header} content={content} />
		</FormUI>
	);
};
export default Form;
