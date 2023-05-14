import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrownLogo} from "../../assets/007 crown[UdemyIran.Com].svg";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrownLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					<Link to="/sign-in" className="nav-link">
						Sign In
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
