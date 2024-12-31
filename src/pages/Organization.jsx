import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Organization.module.css"

const Organization = () => {
    return ( 
        <>
        <div className={styles.dashboard}>
            <Sidebar/>
            <Navbar/>
            <p>This is the Organization page</p>
        </div>

        </>
     );
}
 
export default Organization;