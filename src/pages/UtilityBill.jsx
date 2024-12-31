import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/UtilityBill.module.css"

const UtilityBill = () => {
    return ( 
        <>
        <div className={styles.dashboard}>
            <Sidebar/>
            <Navbar/>
            <p>This is the Utility Bill page</p>
        </div>

        </>
     );
}
 
export default UtilityBill;