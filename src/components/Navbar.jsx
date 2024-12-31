import styles from "./Navbar.module.css"
import Content from "./Content"
import Menu from "../components/Assets/hamburger.png"
import GrayMenu from "../components/Assets/menu-gray.png"

const Navbar = () => {
    return ( 
        <>
            <ul className={styles.ul}>
                <li>
                    <img className={styles.menu} src={Menu} alt="Menu Icon"></img>
                </li>
                <li>Instrux</li>
                <button className={styles["logout-btn"]}>Logout</button>
            </ul>
            <section className={styles.content}>
               <Content/>
            </section>
        </>
     );
}
 
export default Navbar;