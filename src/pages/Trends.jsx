import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Trends.module.css"

const Trends = (props) => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <main>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <Options/>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Trends;