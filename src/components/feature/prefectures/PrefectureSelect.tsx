import type { Prefecture } from '@components/feature/graph/PopulationGraph';
import { usePrefectures } from 'src/hooks/usePrefectures';
interface Props {
  prefecture: Prefecture;
}

export const PrefectureSelect = ({ prefecture }: Props) => {
  const { toggleSelectedPref } = usePrefectures();
  return (
    <>
      <input
        type="checkbox"
        id={prefecture.prefCode.toString()}
        value={prefecture.prefCode}
        name={prefecture.prefName}
        onChange={() => toggleSelectedPref(prefecture)}
      />
      <label htmlFor={prefecture.prefCode.toString()}>{prefecture.prefName}</label>
    </>
  );
};
