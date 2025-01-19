import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom"
import { Chart,
        LinearScale,
        CategoryScale,
        PointElement,
        BarElement, 
        Title,
        Tooltip, 
        Legend 
    } from "chart.js";

Chart.register(
    LinearScale,
    CategoryScale,
    PointElement,
    BarElement, 
    Title,
    Tooltip, 
    Legend,
    zoomPlugin
)

const zoomOptions = {
    pan: {
      enabled: true,
      mode: "x"
    },
    zoom: {
      wheel: {
        enabled: true
      },
      pinch: {
        enabled: true
      },
      mode: "x"
    }
  };
  
    
const CurrentTHD = () => {

    const options = {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'CurrentTHD',
                font: {
                    size: 14,
                    family: "Poppins-Regular",
                    weight: "bolder"
                },
                position: "bottom"
            }, zoom: zoomOptions
        }
    }
    const data = {
        "labels": ["13 Jan", "14 Jan", "15 Jan"],
        "datasets": [
          {
            "label": "CurrentTHD",
            "data": [4.04, 4.43, 3.08],
            "backgroundColor": "rgba(128, 128, 128, 0.8)", 
            "borderColor": "rgba(128, 128, 128, 1)",
            "borderWidth": 1
          }
        ]
      }
      

    return ( 
        <>
            <Bar data={data} options={options}></Bar>
        </>
     );
}
 
export default CurrentTHD;