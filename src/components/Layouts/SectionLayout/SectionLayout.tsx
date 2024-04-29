import { ReactNode } from "react";

import classNames from "classnames";

import classes from "./Section.module.css";

interface Props {
	children: ReactNode | ReactNode[];
	className?: string;
}

const SectionLayout = ({ children, className }: Props) => {
	return (
		<div className={classNames(classes.Section, className)}>{children}</div>
	);
};

export default SectionLayout;
