import React, { useContext } from "react";
import { SidebarContext } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Trends.module.css"
import EnergyCurrentGraph from "../components/Charts/Trends_Line_Energy";
import PeakEnergy from "../components/Charts/Trends_Bar_Peak_Energy";
import Current from "../components/Charts/Trends_Line_Current";
import Voltage from "../components/Charts/Trends_Line_Voltage";

const Trends = (props) => {
        const { closeVal } = useContext(SidebarContext);

    const updateCharts = () => {
        console.log("This function is working.")
    }

    return ( 
        <>
        <div className={closeVal ? `${styles['body']} ${styles['sidebar-collapsed']}` : styles['body']}>
            <Sidebar/>
            <main className={styles.main}>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <Options/>
                <div className={styles.duration}>
                    <p className={styles["duration-label"]}>Duration</p>
                    <input type="date" id="calendar"/>
                </div>
                <div className={styles["device-details"]}>
                    <div className={styles.address}>{}Address</div>
                    <div className={styles.device}>{}Device</div>
                </div>
                <div className={styles.labels}> 
                    <label htmlFor="energy" id="energy-label">
                        <input type="checkbox" id="energy" name="energy" value="energy"/>
                        Energy
                    </label>    
                    <label htmlFor="energy_peak" id="energy-peak-label">
                        <input type="checkbox" id="energy_peak" name="energy_peak" value="energy_peak"/>
                        Energy Peak and Off Peak
                    </label>

                    <label htmlFor="max_power" id="max-power-label">
                        <input type="checkbox" id="max_power" name="max_power" value="max_power"/>
                        Max Power and Off Peak
                    </label>

                    <label htmlFor="power" id="power-label">
                        <input type="checkbox" id="power" name="power" value="power"/>
                        Power
                    </label>

                    <label htmlFor="voltage" id="voltage-label">
                        <input type="checkbox" id="voltage" name="voltage" value="voltage"/>
                        Voltage
                    </label>

                    <label htmlFor="current" id="current-label">
                        <input type="checkbox" id="current" name="current" value="current"/>
                        Current
                    </label>

                    <label htmlFor="power_factor" id="power-factor-label">
                        <input type="checkbox" id="power_factor" name="power_factor" value="power_factor"/>
                        Power Factor
                    </label>

                </div>
                <div className={styles["button-div"]}>
                    <button className={styles.update} onClick={updateCharts}>
                        Update Charts
                    </button>
                </div>
                <div className={styles.graphs}>
                    <div className={styles["graph-container"]}>
                        <EnergyCurrentGraph/>
                    </div>
                    <div className={styles["graph-container"]}>
                        <PeakEnergy/>
                    </div>
                    <div className={styles["graph-container"]}>
                        <Voltage/>
                    </div>
                    <div className={`${styles["graph-container"]} ${styles["last-graph"]}`}>
                        <Current/>
                </div>
                </div>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Trends;