import { Line } from "react-chartjs-2";
import { Chart,
        LinearScale,
        CategoryScale,
        PointElement,
        LineElement, 
        Title,
        Tooltip, 
        Legend 
    } from "chart.js";

Chart.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement, 
    Title,
    Tooltip, 
    Legend 
)
  
    
const ApparentPower = () => {

    const options = {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Apparent Power (KvA) ',
                font: {
                    size: 14,
                    family: "Poppins-Regular",
                    weight: "bolder"
                },
                align: "start"
            }
        }
    }
    const data = {
        "labels": [
          "12:00 AM", "12:01 AM", "12:02 AM", "12:03 AM", "12:04 AM", "12:05 AM", "12:06 AM"
        ],
        "datasets": [
          {
            "label": "R",
            "data": [
              1, 13, 12, 11, 10, 8
            ],
            "borderColor": "rgba(128, 128, 128, 1)",
            "backgroundColor": "red",
            "borderWidth" : 1,
            "tension": 0.4
          },
          {
            "label": "Y",
            "data": [4.04, 4.43, 3.08, 4, 6, 2.0],
            "backgroundColor": "yellow", 
            "borderColor": "rgba(128, 128, 128, 1)",
            "borderWidth": 1,
            "tension": 0.8
          },
          {
            "label": "B",
            "data": [1.49, 1.54, 0.50, 4.43, 3.08, 9],
            "backgroundColor": "blue", 
            "borderColor": "rgba(0, 123, 255, 1)",
            "borderWidth": 1,
            "tension": 0.4
          },
          {
            "label": "G",
            "data": [1.49, 1.54, 0.50, 5.7, 2, 1, 3],
            "backgroundColor": "green", 
            "borderColor": "rgba(0, 123, 255, 1)",
            "borderWidth": 1,
            "tension": 0.4
          }
        ]
      }
      

    return ( 
        <>
            <Line data={data} options={options}></Line>
        </>
     );
}
 
export default ApparentPower;