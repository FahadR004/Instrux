import React, { useContext } from "react";
import { SidebarContext } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Warning_Logs.module.css"

const Log = (props) => {
        const { closeVal } = useContext(SidebarContext);

    return ( 
        <>
        <div className={closeVal ? `${styles['body']} ${styles['sidebar-collapsed']}` : styles['body']}>
            <Sidebar/>
            <main className={styles.main}>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <div className={styles.card}>
                    <h2 className={styles.header}>Warnings and Alarm Logs</h2>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th>Device ID</th>
                                <th>Location Name</th>
                                <th>Device Name</th>
                                <th>Event Type</th>
                                <th>Severity</th>
                                <th>Date Time</th>
                                <th>Message</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <select className={styles.select} name="locations"  id="locations" placeholder="Location">
                                        <option value="%" selected="">All Locations</option>
                                        <option value="1">EL Workshop Lab</option><option value="17">Oh My Grill</option>
                                        <option value="26">Rainbow</option>
                                        <option value="28">Korangi Factory</option>
                                        <option value="29">Ziauddin</option>
                                        <option value="37">HPCC Building</option>
                                        <option value="44">Qatar University</option>
                                        <option value="49">Metco Foods</option>
                                        <option value="57">HPCC</option>
                                        <option value="58">Rainbow</option>
                                        <option value="60">GSK</option>
                                        <option value="84">Sir Hashim's Home</option>
                                        <option value="85">Taha Amjad's Home</option>      
                                    </select>
                                </td>
                                <td>
                                    <select className={styles.select} name="devices" id="devices" placeholder="Devices">
                                            <option value="%">All Devices</option>
                                            <option value="24">El-measure</option>
                                            <option value="66">Selec</option>
                                            <option value="103">Schneider</option>
                                            <option value="104">Korangi Factory</option>
                                            <option value="105">Selec-2</option>
                                            <option value="119">Schneider230</option>
                                            <option value="120">schneider2</option>
                                            <option value="121">Selec2test</option>
                                            <option value="123">Test_3</option>
                                            <option value="124">Selec3</option>
                                            <option value="127">Schneider_PM2120</option>
                                            <option value="128">Selec_MFM376</option>
                                            <option value="129">POLAR STAR</option>
                                            <option value="134">TOMZN DDS238</option>
                                            <option value="135">TOMZN DDS238 - 1</option>
                                    </select>
                                </td>
                                <td>
                                    <select className={styles.select} name="eventType" id="eventType" placeholder="Event Type">
                                        <option value="%" selected="">All Events</option>
                                        <option value="Voltage Line Neutral">Voltage Line Neutral</option>
                                        <option value="Voltage Line Line">Voltage Line Line</option>
                                        <option value="Current">Current</option>
                                        <option value="THD% Current">THD% Current</option>
                                        <option value="THD% Line Line Voltage">THD% Line Line Voltage</option>
                                        <option value="Maximum Demand">Maximum Demand</option>
                                        <option value="Power Factor subceed in Off Peak Time">Power Factor subceed in Off Peak Time</option>
                                        <option value="Energy Units Monthly">Energy Units Monthly</option>
                                        <option value="Energy Units Weekly">Energy Units Weekly</option>
                                        <option value="Energy Units Daily">Energy Units Daily</option>
                                        <option value="Power Factor subceed in Peak Time">Power Factor subceed in Peak Time</option>
                                        <option value="Budget Monthly">Budget Monthly</option>
                                        <option value="Budget Daily">Budget Daily</option>      
                                    </select>
                                </td>
                                <td>
                                <select className={styles.select} name="severity" id="severity" placeholder="Severity">
                                    <option value="%" selected="">Both</option>
                                    <option value="Warning">Warning</option>
                                    <option value="Alarm">Alarm</option></select>
                                </td>
                                <td>

                                </td>
                                <td>
                                    <button className={styles["update-button"]}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                            <tr className={styles.logs}>
                                <td>128</td>
                                <td>HPCC Building</td>
                                <td>Selec_MFM376</td><td>Voltage Line Line Fluctuation</td>
                                <td>Warning</td>
                                <td>2024-11-12 11:07:27</td>
                                <td>Line to Line Voltage is below define limit, it is 378.92V.</td>
                            </tr>
                            <tr className={styles.logs}>
                                <td>128</td>
                                <td>HPCC Building</td>
                                <td>Selec_MFM376</td><td>Voltage Line Line Fluctuation</td>
                                <td>Warning</td>
                                <td>2024-11-12 11:07:27</td>
                                <td>Line to Line Voltage is below define limit, it is 378.92V.</td>
                            </tr>
                            <tr className={styles.logs}>
                                <td>128</td>
                                <td>HPCC Building</td>
                                <td>Selec_MFM376</td><td>Voltage Line Line Fluctuation</td>
                                <td>Warning</td>
                                <td>2024-11-12 11:07:27</td>
                                <td>Line to Line Voltage is below define limit, it is 378.92V.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Log;