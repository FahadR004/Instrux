import { useContext, useState } from "react";
import { SidebarContext } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Intelligence.module.css"
import Popup from "../components/Popup";
import ProjectedExpenses from "../components/Charts/Intelligence_Line_Expenses";
import Shifts from "../components/Charts/Intelligence_Bar_Charts";

const Intelligence = (props) => {

     const { closeVal } = useContext(SidebarContext);

     const [option, setOption] = useState("")

     const [buttonPopup, setButtonPopup] = useState(false);

    return ( 
        <>
        <div className={closeVal ? `${styles['body']} ${styles['sidebar-collapsed']}` : styles['body']}>
            <Sidebar/>
            <main className={styles.main}>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <Options/>
                <div className={styles["header-container"]}>
                     <div className={styles["device-details"]}>
                        <div className={styles.address}>{}Address</div>
                        <div className={styles.device}>{}Device</div>
                    </div>
                    <div className={styles["bill-container"]}>
                        <div className={styles.billbox}>December Bill: <span className={styles.bill}>{} PKR</span></div>
                        <div className={styles.billbox}> Current January Bill: <span className={styles.bill}>{} PKR</span></div>
                        <div className={styles.billbox}> Predicted January Bill: <span className={styles.bill}>{} PKR</span></div>
                    </div>
                </div>
                <div className={styles["mid-section"]}>
                     <div className={styles.duration}>
                        <p className={styles["duration-label"]}>Duration</p>
                        <input type="date" id="calendar"/>
                    </div>
                    <div className={styles.projected}>
                        <p>Projected Expenses at the end of this duration: <span className={styles.bill}>{} PKR</span></p>
                    </div>
                </div>
                <div className={styles["graph-container"]}>
                    <ProjectedExpenses/>
                </div>
                <div className={styles["bottom-section"]}>    
                <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Interval</th>
                                <th scope="row">Amount Billed</th>
                                <th>Graph</th>
                                <th> Delete </th>
                            </tr>
                        </thead>

                        <tbody>

                           <tr>
                                <td>Overnight</td>
                                <td>22:00 to 05:00</td>
                                <td>29 PKR (1 daily)</td>
                                <td type="submit" name="delete" className={styles["display-graph"]}>
                                    {/* <form method=""> */}
                                        {/* <input type="hidden" name="shiftId" value="117"/> */}
                                            <svg onClick={()=> setButtonPopup(true)} className={styles["graph-btn"]} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M6 20c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2v7c0 1.1.9 2 2 2m10-5v3c0 1.1.9 2 2 2s2-.9 2-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2m-4 5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2"/>
                                            </svg>
                                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                                <div className={styles["popup-graph"]}>
                                                    <Shifts></Shifts>
                                                </div>
                                            </Popup>
                                    {/* </form> */}
                                </td>   
                                <td className={styles["delete"]}>
                                    <form method="POST">
                                    <input type="hidden" name="shiftId" value="117"/>
                                    <button type="submit" name="delete" title="Delete Shift" >
                                    <svg className={styles["delete-btn"]} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zm2.692-3q.213 0 .357-.144t.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144"/>
                                    </svg>
                                    </button>
                                </form>
                                </td>
                           </tr>

                            
                         
                            
                            {/* <tr>
                            <td>Overnight</td>
                            <td>22:00 to 05:00</td>
                            <td>29 PKR (1 daily)</td>
                            <td>
                            <button type="button" data-toggle="modal" data-target="#shiftgraph117"><i class="fa fa-bar-chart"></i></button>
                            </td>
                            <td><form method="POST"><input type="hidden" name="shiftId" value="117">
                            <button type="submit" name="delete" title="Delete Shift"><i class="fa fa-trash"></i></button>
                            </form></td>
                            </tr>
                            
                            <tr>
                            <td>School Leaving Time</td>
                            <td>05:00 to 07:00</td>
                            <td>11 PKR (0 daily)</td>
                            <td>
                            <button type="button" data-toggle="modal" data-target="#shiftgraph124"><i class="fa fa-bar-chart"></i></button>
                            </td>
                            <td><form method="POST"><input type="hidden" name="shiftId" value="124">
                            <button type="submit" name="delete" title="Delete Shift"><i class="fa fa-trash"></i></button>
                            </form></td>
                            </tr>
                            
                            <tr>
                            <td>Evening Time</td>
                            <td>17:00 to 20:00</td>
                            <td>29 PKR (1 daily)</td>
                            <td>
                            <button type="button" data-toggle="modal" data-target="#shiftgraph125"><i class="fa fa-bar-chart"></i></button>
                            </td>
                            <td><form method="POST"><input type="hidden" name="shiftId" value="125">
                            <button type="submit" name="delete" title="Delete Shift"><i class="fa fa-trash"></i></button>
                            </form></td>
                            </tr>
                            
                            <tr>
                            <td>Daily (per 24Hrs)</td>
                            <td>00:00 to 23:45</td>
                            <td>166 PKR (6 daily)</td>
                            <td>
                            <button type="button" data-toggle="modal" data-target="#shiftgraph127"><i class="fa fa-bar-chart"></i></button>
                            </td>
                            <td><form method="POST"><input type="hidden" name="shiftId" value="127">
                            <button type="submit" name="delete" title="Delete Shift"><i class="fa fa-trash"></i></button>
                            </form></td>
                            </tr> */}
                        </tbody>
                    </table>
                    <form className={styles["select-shift"]}>
                        <input 
                        className={styles.name} 
                        type="text"
                        placeholder="Name:"
                        />
                        <select>
                            <option selected disabled>Select Frequency</option>
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly Frequency</option>
                        </select>
                        <div className={styles["range-selection"]}>
                        <select name="" id="">

                        </select>
                        <div>To</div>
                        <select name="" id="">
                            
                        </select>
                        </div>
                        <button className={styles["shift-button"]}>
                            Add Shift
                        </button>
                    </form>
                </div>
                <Footer/>
            </main>
        </div>

        </>
     );
}
 
export default Intelligence;