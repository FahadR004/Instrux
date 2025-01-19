    import React, { useContext } from "react";
import { SidebarContext } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Organization.module.css";
import OrgChart from "../components/Charts/Organization_OrgChart";



const Organization = (props) => {
    const { closeVal } = useContext(SidebarContext);

    const chartsData = [
        // Chart 1
        [
          ["Destination", "Source", "Nickname"],
          [
            {
              v: "Oh My Grill",
              f: '<div style="color:blue; font-weight:bold">Oh My Grill</div>',
            },
            "",
            "",
          ],
        ],
        [ 
            ["Destination", "Source", "Nickname"],
            [
                {
                  v: "Rainbow",
                  f: '<div style="color:blue; font-weight:bold">Rainbow</div>',
                },
                "",
                "",
            ],
        ],
        [ 
            ["Destination", "Source", "Nickname"],
            [
                {
                  v: "Korangi Factory",
                  f: '<div style="color:blue; font-weight:bold">Korangi Factory</div>',
                },
                "",
                "",
            ],
        ],
      
        // Chart 2
        [
          ["Destination", "Source", "Nickname"],
          [
            {
              v: "Ziauddin",
              f: '<div style="color:green; font-weight:bold">Ziauddin</div>',
            },
            "",
            "",
          ],
          [
            {
              v: "Mri",
              f: '<div style="color:red; font-weight:bold">Mri</div>',
            },
            "Ziauddin",
            "",
          ],
          [
            {
              v: "Ct",
              f: '<div style="color:red; font-weight:bold">Ct</div>',
            },
            "Ziauddin",
            "",
          ],
        ],
      
        // Chart 3
        [
          ["Destination", "Source", "Nickname"],
          [
            {
              v: "Metco Foods",
              f: '<div style="color:blue; font-weight:bold">Metco Foods</div>',
            },
            "",
            "",
          ],
          [
            {
              v: "Manufacturing Department",
              f: '<div style="color:red; font-weight:bold">Manufacturing Department</div>',
            },
            "Metco Foods",
            "",
          ]
        ],
      
        [
          ["Destination", "Source", "Nickname"],
          [
            {
              v: "Sir Hashim's Home",
              f: '<div style="color:blue; font-weight:bold">Sir Hashim\'s Home</div>',
            },
            "",
            "",
          ]
        ],
        [ 
            ["Destination", "Source", "Nickname"],
            [ 
                {
                v: "Taha Amjad's Home",
                f: '<div style="color:blue; font-weight:bold">Taha Amjad\'s Home</div>',
            },
            "",
            "",
            ]
        ],
      ];


    return (
        <>
            <div className={closeVal ? `${styles['body']} ${styles['sidebar-collapsed']}` : styles['body']}>
                <Sidebar />
                <main className={styles.main}>
                    <Navbar />
                    <p className={styles.dir}>Dashboard / {props.name}</p>

                    <div className={styles["chart-container"]}>
                        {chartsData.map((data, index) => (
                            <div
                            key={index}
                            className={styles.chart}>
                                <OrgChart data={data} />
                            </div>
                        ))}
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles["add-location-btn"]}>
                            <span className={styles.plus}>+</span> Add Location
                        </button>
                        <button className={styles["add-device"]}>
                            <span className={styles.plus}>+</span> Add Device
                        </button>
                        <button className={styles["update-peak-hours-btn"]}>
                            <span className={styles.plus}>+</span> Update Peak Hours
                        </button>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.header}>User Devices</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Device Name</th>
                                    <th>Location</th>
                                    <th>Node Mac</th>
                                    <th>Current Limit</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-title="Device Name">El-measure</td>
                                    <td data-title="Location">EL Workshop Lab</td>
                                    <td data-title="Node Mac">14830182194221188</td>
                                    <td data-title="Current Limit">100</td>
                                    <td data-title="Action">
                                        <button className={styles["edit-button"]} onClick={() => {}}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-title="Device Name">El-measure</td>
                                    <td data-title="Location">EL Workshop Lab</td>
                                    <td data-title="Node Mac">14830182194221188</td>
                                    <td data-title="Current Limit">100</td>
                                    <td data-title="Action">
                                        <button className={styles["edit-button"]} onClick={() => {}}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-title="Device Name">El-measure</td>
                                    <td data-title="Location">EL Workshop Lab</td>
                                    <td data-title="Node Mac">14830182194221188</td>
                                    <td data-title="Current Limit">100</td>
                                    <td data-title="Action">
                                        <button className={styles["edit-button"]} onClick={() => {}}>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Footer />
                </main>
            </div>
        </>
    );
};

export default Organization;
