import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Reports.module.css"

const Reports = (props) => {
    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>
            <main className={styles["reports-page"]}>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <div className={styles["main-content"]}>
                    <div className={styles.dropdown}>
                        <div className={styles["report-label"]}>
                            <p>Report Type</p>
                        </div>
                            <select id="report-time" className={styles["report-time"]}>
                                <option selected value="Daily">Daily</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                    </div>
                    <div className={styles.dropdown}>
                        <div className={styles["duration-label"]}>
                            <p>Duration</p>
                        </div>
                            <select id="duration-options" className={styles["duration-options"]}>
                                <option selected value="Duration">mm / dd / yyyy</option>
                            </select>
                    </div>
                    <div className={styles.dropdown}>
                        <div className={styles["location-label"]}>
                            <p className={styles["location-p"]}>Location</p>
                        </div>
                        <select name="locations" class="custom-select form-control" id="locations" placeholder="Location" aria-label="Location" aria-describedby="basic-addon1" required="">
                        <option value="" disabled="" selected="">Select Your Location</option>
                        <option value="1">EL Workshop Lab</option>
                        <option value="17">Oh My Grill</option>
                        <option value="26">Rainbow</option>
                        <option value="28">Korangi Factory</option>
                        <option value="29">Ziauddin</option>
                        <option value="37">HPCC Building</option>
                        <option value="44">Qatar University</option>
                        <option value="49">Metco Foods</option><option value="57">HPCC</option>
                        <option value="58">Rainbow</option><option value="60">GSK</option>
                        <option value="84">Sir Hashim's Home</option>
                        <option value="85">Taha Amjad's Home</option>			
                        </select>
                    </div>
                    <div className={styles.dropdown}>
                        <div className={styles["device-label"]}>
                            <p className={styles["device-p"]}>Device</p>
                        </div>
                            <select id="device-options" className={styles["device-options"]}>
                                <option selected value="Daily">Select Your Device</option>
                            </select>
                    </div>
                    <div className={styles.dropdown}>
                        <div className={styles["email-label"]}>
                            <p>Email</p>
                        </div>
                            <input 
                                id="email-input"
                                type="email"
                                placeholder="e.g.: abc@xyz.com"
                            />
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.pdf}>
                            Generate Report (PDF)
                        </button>
                        <button className={styles.email}>
                            Generate & Email
                        </button>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Reports;