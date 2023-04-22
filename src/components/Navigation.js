import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <header>
            <nav>
                <ul className={classes.ul}>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? classes.active : ''} end>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({isActive}) => isActive ? classes.active : ''}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
