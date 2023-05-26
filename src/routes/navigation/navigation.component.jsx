import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrownLogo} from "../../assets/007 crown[UdemyIran.Com].svg";
import "./navigation.styles.scss";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
	const {currentUser} = useContext(UserContext);

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
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							Sign Out
						</span>
					) : (
						<Link to="/auth" className="nav-link">
							Sign In
						</Link>
					)}
					<CartIcon />
				</div>
				<CartDropdown />
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
