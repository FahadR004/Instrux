import styles from "./Options.module.css"
import { Link } from "react-router-dom";

const Options = () => {
    return (  
        <>
        <div className={styles.options}>
            <div className={styles["gear-icon"]}>
                <svg className={styles.gears} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1920 1792"><path fill="#626262" d="M896 896q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m768 512q0-52-38-90t-90-38t-90 38t-38 90q0 53 37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5m0-1024q0-52-38-90t-90-38t-90 38t-38 90q0 53 37.5 90.5T1536 512t90.5-37.5T1664 384m-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76q34 48 90 115q7 11 7 20q0 12-7 19q-23 30-82.5 89.5T999 1423q-11 0-21-7l-115-90q-37 19-77 31q-11 108-23 155q-7 24-30 24H547q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7q-11 0-21-8q-144-133-144-160q0-9 7-19q10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5T0 987V802q0-10 7-19.5T23 772l155-24q11-35 32-76q-34-48-90-115q-7-11-7-20q0-12 7-20q22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32q11-108 23-154q7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7q11 0 21 8q144 133 144 160q0 8-7 19q-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5m640 533v140q0 16-149 31q-12 27-30 52q51 113 51 138q0 4-4 7q-122 71-124 71q-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71q-4-3-4-7q0-25 51-138q-18-25-30-52q-149-15-149-31v-140q0-16 149-31q13-29 30-52q-51-113-51-138q0-4 4-7q4-2 35-20t59-34t30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70q4 3 4 7q0 25-51 138q17 23 30 52q149 15 149 31m0-1024v140q0 16-149 31q-12 27-30 52q51 113 51 138q0 4-4 7q-122 71-124 71q-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71q-4-3-4-7q0-25 51-138q-18-25-30-52q-149-15-149-31V314q0-16 149-31q13-29 30-52q-51-113-51-138q0-4 4-7q4-2 35-20t59-34t30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70q4 3 4 7q0 25-51 138q17 23 30 52q149 15 149 31"/></svg>
            </div>
            <select id="device-address" className={styles["device-address"]}>
                <option disabled>Please Select Device</option>
                <option selected value="?deviceId=24">NED University &gt; Electronic Engineering Department &gt; EL Workshop Lab &gt; El-measure</option>
                <option value="?deviceId=66">Oh My Grill &gt; Selec</option>
                <option value="?deviceId=103">NED University &gt; Qatar University &gt; Schneider</option>
                <option value="?deviceId=104">Korangi Factory &gt; Korangi Factory</option>
                <option value="?deviceId=105">Ziauddin &gt; Selec-2</option>
                <option value="?deviceId=119">Metco Foods &gt; Schneider230</option>
                <option value="?deviceId=120">schneider2</option>
                <option value="?deviceId=121">Selec2test</option>
                <option value="?deviceId=123">Test_3</option>
                <option value="?deviceId=124">Metco Foods &gt; Selec3</option>
                <option value="?deviceId=127">Rainbow &gt; Schneider_PM2120</option>
                <option value="?deviceId=128">NED University &gt; HPCC Building &gt; Selec_MFM376</option>
                <option value="?deviceId=129">NED University &gt; Electronic Engineering Department &gt; EL Workshop Lab &gt; POLAR STAR</option>
                <option selected="" value="?deviceId=134">Sir Hashim's Home &gt; TOMZN DDS238</option>
                <option value="?deviceId=135">Taha Amjad's Home &gt; TOMZN DDS238 - 1</option>
            </select>
        </div>
        </>
    );
}
 
export default Options;