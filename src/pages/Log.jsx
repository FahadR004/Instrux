import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Log.module.css"

const Log = () => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <Navbar/>
            <p>This is the warnings log page</p>
        </div>

        </>
     );
}
 
export default Log;