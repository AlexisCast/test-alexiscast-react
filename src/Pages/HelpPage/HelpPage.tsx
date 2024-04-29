import { Link } from "react-router-dom";

import PageLayout from "../../components/Layouts/PageLayout/PageLayout";
import SectionLayout from "../../components/Layouts/SectionLayout/SectionLayout";

import classes from "./HelpPage.module.css";

export const HelpPage = () => {
	return (
		<PageLayout>
			<SectionLayout className={classes.SectionTwo}>
				<Link to="/login">Back to Login</Link>
				<Link to="/">Home</Link>
				<section className={classes.SectionX}>
					<h2>Help Page</h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec vulputate risus et risus ultrices ullamcorper. In
					vehicula malesuada risus quis eleifend. Donec quis magna a
					dui posuere tincidunt. Sed dictum, sapien eu gravida porta,
					purus mauris euismod nulla, vulputate sodales turpis erat
					vel mauris. Aenean sagittis velit eu eros luctus, bibendum
					pulvinar nibh dignissim. Nunc ultrices arcu ac aliquet
					ornare. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Aliquam vel tellus diam. Etiam scelerisque malesuada
					massa, at vestibulum turpis congue vestibulum. Nullam
					ultrices est mauris, at ullamcorper magna convallis vel.
					Aenean eleifend mollis nunc a posuere. Vestibulum tempus ut
					nibh eget commodo.
				</section>
			</SectionLayout>
		</PageLayout>
	);
};
