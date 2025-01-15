import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import Options from "../components/Options";
import React, { useContext, useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Footer from "../components/Footer";
import App, { SidebarContext } from "../App";
import CurrentTHD from "../components/Charts/Home_Bar_Current";
import VoltageTHD from "../components/Charts/Home_Bar_Voltage";
import ApparentPower from "../components/Charts/Home_Line";

// Function to generate dynamic data
function generateData(label) {
  return [
    ["Label", "Value"],
    [label, Math.floor(Math.random() * 101)],
  ];
}

// Options template for all charts
const commonOptions = {
  width: 350,
  height: 200,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  greenFrom: 0,
  greenTo: 89,
  minorTicks: 20
};

const Home = (props) => {
  // State for all chart data
  const [charts, setCharts] = useState([
    { id: 1, label: "Voltage", data: generateData("Voltage") },
    { id: 2, label: "Current", data: generateData("Current") },
    { id: 3, label: "Real Power", data: generateData("Real Power") },
    { id: 4, label: "Reactive", data: generateData("Reactive") },
    { id: 5, label: "Apparent", data: generateData("Apparent") },
    { id: 6, label: "P.F.", data: generateData("P.F.") },
  ]);

  const { closeVal } = useContext(SidebarContext);

  // Update chart data periodically
  useEffect(() => {
    const id = setInterval(() => {
      setCharts((prevCharts) =>
        prevCharts.map((chart) => ({
          ...chart,
          data: generateData(chart.label),
        }))
      );
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div
        className={
          closeVal
            ? `${styles["body"]} ${styles["sidebar-collapsed"]}`
            : styles["body"]
        }
      >
        <Sidebar />
        <main className={styles.main}>
          <Navbar />
          <p className={styles.dir}>Dashboard / {props.name}</p>
          <Options />
          <div className={styles["label-containers"]}>
            <div className={styles.box}>
              <p>Device</p>
            </div>
            <div className={styles.box}>
              <p>Device Status: </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="green" d="M4 20V4h16v16z" />
              </svg>
            </div>
            <div className={`${styles.box} ${styles["last-updated"]}`}>
              <p>
                Last updated: <span>{} seconds ago</span>
              </p>
            </div>
            <div className={styles.box}>
              <p>Server Connection: </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="green" d="M4 20V4h16v16z" />
              </svg>
            </div>
            <div className={styles.box}>
              <p>Synchronization: </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="green" d="M4 20V4h16v16z" />
              </svg>
            </div>
            </div>
            <div className={styles["charts-container"]}>
            {charts.map((chart) => (
              <div key={chart.id} className={styles["chart-box"]}>
                <Chart
                  width="100%"
                  height="100%"
                  chartType="Gauge"
                  data={chart.data}
                  options={commonOptions}
                />
              </div>
            ))}
          </div>
          <div className={styles["value-container"]}>
                  <div className={styles.label}>
                    <div className={styles['graph-label']}>Voltage</div>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}V</div>
                  </div>
                  <div className={styles.label}>
                  <div className={styles['graph-label']}>Current</div>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}A</div>
                  </div>
                  <div className={styles.label}>
                  <div className={styles['graph-label']}>Real Power</div>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}kW</div>
                  </div> 
                  <div className={styles.label}>
                    <div className={styles['graph-label']}>Reactive</div>
                    <div className={styles.red}>2</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}kVAr</div>
                  </div> 
                  <div className={styles.label}>
                  <div className={styles['graph-label']}>Apparent</div>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}kVa</div>
                  </div> 
                  <div className={styles.label}>
                  <div className={styles['graph-label']}>P.F.</div>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}PF</div>
                  </div>          
          </div>
              <div className={styles["bottom-section"]}>
                <div className={styles["voltage-container"]}> 
                    <VoltageTHD/>
                </div>
                <div className={styles["current-container"]}>
                    <CurrentTHD/>
                </div>
                <div className={styles.properties}>
                    <div className={styles["property-values"]}>Frequency: {} Hz</div>
                    <div className={styles["property-values"]}>Energy: {} kWh</div>
                    <div className={styles["property-values"]}>Maximum Demand(KW): </div>
                </div>
                <div className={styles["ap-container"]}>
                  <ApparentPower/>
                </div>
           </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
