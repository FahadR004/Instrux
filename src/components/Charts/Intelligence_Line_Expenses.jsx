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
  
    
const ProjectedExpenses = () => {

    const options = {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Projected Expenses Over Time',
                font: {
                    size: 20,
                    family: "Poppins-Regular",
                    weight: "bolder"
                }
            }
        }
    }
    const data = {
        "labels": [
          "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
          "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
          "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
          "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"
        ],
        "datasets": [
          {
            "label": "Current Expenses",
            "data": [
              15, 13, 12, 11, 10, 8, 7, 9, 12, 18, 20, 23,
              25, 27, 30, 28, 25, 22, 20, 18, 17, 16, 15, 14
            ],
            "borderColor": "rgba(75, 192, 192, 1)",
            "backgroundColor": "rgba(75, 192, 192, 0.2)",
            "tension": 0.4
          }, {
            "label": "Projected Expenses",
            "data": [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              25, 27, 30, 28, 25, 22, 20, 18, 17, 16, 15, 14
            ],
            "borderColor": "rgba(75, 192, 192, 1)",
            "backgroundColor": "rgba(0, 0, 0, 0.2)",
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
 
export default ProjectedExpenses;