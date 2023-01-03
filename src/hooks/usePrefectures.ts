import { fetchPopulation } from './../lib/fetchPrefectures';
import type { Prefecture } from '../types/model';
import { selectedPopulationDataStore, populationGraphStore } from 'src/store/store';
import { useStore } from '@nanostores/react';

export const usePrefectures = () => {
  const $selectedPrefectures = useStore(selectedPopulationDataStore);
  const $populationGraphData = useStore(populationGraphStore);

  const toggleSelectedPref = async (pref: Prefecture) => {
    const foundPrefecture = $selectedPrefectures.find(
      selectedPrefecture => selectedPrefecture.prefCode === pref.prefCode,
    );

    if (!foundPrefecture) {
      selectedPopulationDataStore.set([...$selectedPrefectures, pref]);
      const populationData = await fetchPopulation(pref.prefCode);
      const res = await populationData.json();
      const result = res.result.data[0].data;
      populationGraphStore.set([...$populationGraphData, { pref, valueSeries: result }]);
    } else {
      selectedPopulationDataStore.set(
        $selectedPrefectures.filter(selectedPrefecture => selectedPrefecture.prefCode !== pref.prefCode),
      );
      populationGraphStore.set(
        $populationGraphData.filter(populationData => populationData.pref.prefCode !== foundPrefecture.prefCode),
      );
    }
  };
  return { toggleSelectedPref };
};
