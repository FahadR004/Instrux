import Navbar from "../components/Navbar";
import Options from "../components/Options";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Intelligence.module.css"

const Intelligence = (props) => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <main>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <Options/>
            </main>
        </div>

        </>
     );
}
 
export default Intelligence;