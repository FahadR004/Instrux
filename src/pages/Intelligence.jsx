import { useContext } from "react";
import { SidebarContext } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Intelligence.module.css"

const Intelligence = (props) => {

     const { closeVal } = useContext(SidebarContext);

    return ( 
        <>
        <div className={closeVal ? `${styles['body']} ${styles['sidebar-collapsed']}` : styles['body']}>
            <Sidebar/>
            <main className={styles.main}>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <Options/>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Intelligence;