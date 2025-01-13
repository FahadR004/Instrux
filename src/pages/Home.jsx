import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css"
import Options from "../components/Options";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Footer from "../components/Footer";


export function getData() {
  return [
    ["Label", "Value"],
    ["Voltage", 24],
    ["Current", 51],
    ["Real Power", 90],
    ["Reactive", 90],
    ["Apparent", 90],
    ["P.F.", 90]  
  ];
}

export const options = {
  width: 400,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
};

const Home = (props) => {

    const [data, setData] = useState(getData);

    useEffect( () => {
      
    }
    )

    useEffect(() => {
      const id = setInterval(() => {
        setData(getData());
      }, 3000);
  
      return () => {
        clearInterval(id);
      };
    });

    return ( 
        <>
        <div className={styles.body}>
            <Sidebar/>            
              <main>
                <Navbar/>
                <p className={styles.dir}>Dashboard / {props.name}</p>
                <Options/>
              <div className={styles["label-containers"]}>
                <div className={styles.box}>
                  <p>Device</p>
                </div>
                <div className={styles.box}>
                  <p>Device Status: </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M4 20V4h16v16z"/></svg>
                </div>
                <div className= {`${styles.box} ${styles['last-updated']}`}>
                  <p>Last updated: <span>{} seconds ago</span></p>
                </div>
                <div className={styles.box}>
                  <p>Server Connection: </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M4 20V4h16v16z"/></svg>
                </div>
                <div className={styles.box}>
                  <p>Synchronization: </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M4 20V4h16v16z"/></svg>                  
                </div>
              </div>

                <Chart
                    chartType="Gauge"
                    width="100%"
                    data={data}
                    options={options}
                />    

                <div className={styles["value-container"]}>
                  <div className={styles.label}>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}V</div>
                  </div>
                  <div className={styles.label}>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}A</div>
                  </div>
                  <div className={styles.label}>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}kW</div>
                  </div> 
                  <div className={styles.label}>
                    <div className={styles.red}>2</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}kVAr</div>
                  </div> 
                  <div className={styles.label}>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}kVa</div>
                  </div> 
                  <div className={styles.label}>
                    <div className={styles.red}>1</div>
                    <div className={styles.yellow}>2</div>
                    <div className={styles.blue}>{}PF</div>
                  </div>          
                </div>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>

                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <p className={styles.dir}>Dashboard sa;fdlkjdsaf
                  asdfassda
                  sdfasfsfdsaf
                  asdfassda
                  asdfassda
                  asdfads

                  sadf
                  asd
                  <fieldset>
                    
                  </fieldset>
                </p>
                <Footer/>
            </main>
        </div>

        </>
     ); 
}
 
export default Home;

