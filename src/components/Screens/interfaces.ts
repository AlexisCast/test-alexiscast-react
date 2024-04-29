export interface LoginData {
	email: string;
	password: string;
}

export interface ErrorData {
	isError: boolean;
	header: string;
	content: string;
}