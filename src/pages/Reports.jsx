import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Reports.module.css"

const Reports = () => {
    return ( 
        <>
        <div className={styles.dashboard}>
            <Sidebar/>
            <Navbar/>
            <p>This is the reports page</p>
        </div>

        </>
     );
}
 
export default Reports;