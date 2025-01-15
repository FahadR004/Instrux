import React, { useContext } from "react";
import { SidebarContext } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Users.module.css"

const Users = (props) => {
        const { closeVal } = useContext(SidebarContext);

    return ( 
        <>
        <div className={closeVal ? `${styles['body']} ${styles['sidebar-collapsed']}` : styles['body']}>
            <Sidebar/>
            <main className={styles.main}>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <p className={styles.unauthorized}>Sorry, you're not authorized to access this module. Kindly contact your administrator!</p>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Users;