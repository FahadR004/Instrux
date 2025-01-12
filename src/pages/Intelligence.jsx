import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Intelligence.module.css"

const Intelligence = () => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <Navbar/>
            <p>This is the Intelligence page</p>
        </div>

        </>
     );
}
 
export default Intelligence;