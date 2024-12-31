import styles from "./Sidebar.module.css"

import PFP from "../components/Assets/user.png"
import Monitor from "../components/Assets/computer.png"
import TrendImage from "../components/Assets/bar-chart.png"
import Report from "../components/Assets/file.png"
import Warning from "../components/Assets/warning.png"
import Test from "../components/Assets/test.png"
import OrgImage from "../components/Assets/diagram.png"
import WhitePFP from "../components/Assets/account.png"
import UtilityBill from "../components/Assets/utility-bill.png"



const Sidebar = () => {
    return (  
        <>
        <div className={styles.sidebar}>
            <figure className={styles.figure}>
                    <img className={styles.image} src={PFP} alt="Anonymous Profile Image"></img>
                    <figcaption className={styles.figcaption}>SUPER USER</figcaption>
                    <div className={styles.superuser}>Super User</div>
            </figure>
            <ul className={styles.ul}>
                <li className={styles.heading}>ENGINEERING</li>
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon} src={Monitor} alt="Monitor Icon"></img>
                    <p>Live Monitoring</p>
                </li>
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon}  src={TrendImage} alt="Trends Icon"></img>
                    <p>Trends</p>
                </li>
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon}  src={Report} alt="Report Icon"></img>
                    <p>Reports</p>
                </li>
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon} src={Warning} alt="Warning Icon"></img>
                    <p>Warning Logs</p>
                </li>
                <li className={styles.heading}>BUSINESS</li> 
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon}  src={Test} alt="Intelligence Icon"></img>
                    <p>Intelligence</p>
                </li>
                <li className={styles.heading}>MANAGEMENT</li>
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon}  src={OrgImage} alt="Organization Heirarchy Icon"></img>
                    <p>Organization</p>
                </li>
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon}  src={WhitePFP} alt="Report Icon"></img>
                    <p>Users</p>
                </li>
                <li className={styles.heading}>MISC</li>
                <li className={styles["sub-headings"]}>
                    <img className={styles.icon} src={UtilityBill} alt="Utility Bill"></img>
                    <p>Utility Bill Auditing</p>
                </li>
            </ul>   
        </div>
        
        </>
    );
}
 
export default Sidebar;