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
  
    
const LineGraph = () => {
    return ( 
        <>
        <Line></Line>
        </>
     );
}
 
export default LineGraph;