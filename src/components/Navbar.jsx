import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { SidebarContext } from "../App";
import { useContext } from "react";

const Navbar = () => {

    const { closeVal, setCloseVal } = useContext(SidebarContext);
    
    function toggle() {
        if (closeVal) {
            setCloseVal(false);
        } else {
            setCloseVal(true);
        }
    }

    return ( 
        <>
            <ul className={styles.ul}>
                <li>
                    <svg className={styles.menu} onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"/></g></svg>
                </li>
                <li>Instrux</li>
                <li className={styles["bell-item"]}>
                    <svg className={styles.bell} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
                </li>
                <Link to="/">
                    <button className={styles["logout-btn"]}>Logout</button>
                </Link>
            </ul>
        </>
     );
}
 
export default Navbar;