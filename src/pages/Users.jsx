import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Users.module.css"

const Users = (props) => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <main>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <p className={styles.unauthorized}>Sorry, you're not authorized to access this module. Kindly contact your administrator!</p>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Users;