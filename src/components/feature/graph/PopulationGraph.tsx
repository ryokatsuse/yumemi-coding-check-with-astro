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
import { useStore } from '@nanostores/react';
import { populationGraphStore } from 'src/store/store';
import type { PopulationGraphData } from 'src/types/model';

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

export const createPopulationGraphData = (data: PopulationGraphData[]) => {
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
        backgroundColor: color,
      };
    }),
  };
};

export const PopulationGraph = () => {
  const $populationGraphData = useStore(populationGraphStore);
  return (
    <div className="graph">
      {!$populationGraphData.length ? (
        <p className="flex h-screen w-screen items-center justify-center">都道府県を選択しましょう</p>
      ) : (
        <Line options={options} data={createPopulationGraphData($populationGraphData)} />
      )}
    </div>
  );
};
