import { ReactNode } from "react";
import classNames from "classnames";

import classes from "./PageLayout.module.css";

interface Props {
	children: ReactNode | ReactNode[];
	className?: string;
}

const PageLayout = ({ children, className }: Props) => {
	return (
		<div className={classNames(classes.PageLayout, className)}>
			{children}
		</div>
	);
};

export default PageLayout;
