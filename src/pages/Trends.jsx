import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Trends.module.css"

const Trends = () => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <Navbar/>
            <p>This is the trends page</p>
        </div>

        </>
     );
}
 
export default Trends;