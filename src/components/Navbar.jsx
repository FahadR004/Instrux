import styles from "./Navbar.module.css"
import Menu from "../components/Assets/hamburger.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <ul className={styles.ul}>
                <li>
                    <img className={styles.menu} src={Menu} alt="Menu Icon"></img>
                </li>
                <li>Instrux</li>
                <Link to="/login">
                    <button className={styles["logout-btn"]}>Logout</button>
                </Link>
            </ul>
        </>
     );
}
 
export default Navbar;