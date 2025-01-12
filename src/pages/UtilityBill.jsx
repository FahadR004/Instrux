import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Utility.module.css"

const UtilityBill = () => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <Navbar/>
            <p>This is the Utility Bill page</p>
        </div>

        </>
     );
}
 
export default UtilityBill;