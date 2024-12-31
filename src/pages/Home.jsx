import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css"

const Home = () => {
    return ( 
        <>
        <div className={styles.dashboard}>
            <Sidebar/>
            <Navbar/>
        </div>

        </>
     );
}
 
export default Home;