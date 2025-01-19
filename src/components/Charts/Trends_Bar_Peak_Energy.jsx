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
  
    
const PeakEnergy = () => {

    const options = {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Daily Peak and Off Peak Energy',
                font: {
                    size: 20,
                    family: "Poppins-Regular",
                    weight: "bolder"
                }
            }, zoom: zoomOptions,
        }
    }
    const data = {
        "labels": ["13 Jan", "14 Jan", "15 Jan"],
        "datasets": [
          {
            "label": "Off Peak Units",
            "data": [4.04, 4.43, 3.08],
            "backgroundColor": "rgba(128, 128, 128, 0.8)", // Gray color
            "borderColor": "rgba(128, 128, 128, 1)",
            "borderWidth": 1
          },
          {
            "label": "Peak Units",
            "data": [1.49, 1.54, 0.50],
            "backgroundColor": "rgba(0, 123, 255, 0.8)", // Blue color
            "borderColor": "rgba(0, 123, 255, 1)",
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
 
export default PeakEnergy;