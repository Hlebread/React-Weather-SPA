import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 0.1,
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        font: {
          size: 15,
        },
        padding: 20,
      },
    },
  },
};

export default options;
