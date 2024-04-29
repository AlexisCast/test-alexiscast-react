import { ReactNode } from "react";

import classes from "./SectionContainer.module.css";

interface Props {
	children: ReactNode | ReactNode[];
}

export const SectionContainerLayout = ({ children }: Props) => {
	return (
		<section className={classes.SectionContainerLayout}>{children}</section>
	);
};
