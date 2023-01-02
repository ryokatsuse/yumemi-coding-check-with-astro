import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// FIXME:後で責務分離するかも
export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureResponse = { prefCode: number; prefName: string }[];

export type PopulationResponse = { year: number; value: number }[];
export type DataForPopulationGraph = { pref: Prefecture; valueSeries: PopulationResponse };

type PopulationGraphProps = {
  data: DataForPopulationGraph[];
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options: ChartOptions<'line'> = {
  plugins: {
    legend: { align: 'start', fullSize: false },
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      title: { display: true, text: '年度' },
    },
    y: {
      title: { display: true, text: '総人口' },
    },
  },
};

export const createPopulationGraphData = (data: DataForPopulationGraph[]) => {
  const labels = data[0].valueSeries.map(data => data.year);
  return {
    labels: labels,
    datasets: data.map(data => {
      const color =
        '#' +
        Math.floor(((data.pref.prefCode - 1) / 47) * 16 ** 6)
          .toString(16)
          .padStart(6, '0');
      return {
        label: data.pref.prefName,
        data: data.valueSeries.map(data => data.value),
        borderColor: color,
      };
    }),
  };
};

export const PopulationGraph = ({ data }: PopulationGraphProps) => {
  return (
    <div className="graph">
      <Line options={options} data={createPopulationGraphData(data)} />
    </div>
  );
};
