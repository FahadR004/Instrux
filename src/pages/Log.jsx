import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Log.module.css"

const Log = (props) => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <main>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Log;