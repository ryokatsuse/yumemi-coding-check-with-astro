import type { Prefecture } from '../../../types/model';
import { usePrefectures } from 'src/hooks/usePrefectures';
interface Props {
  prefecture: Prefecture;
}

export const PrefectureSelect = ({ prefecture }: Props) => {
  const { toggleSelectedPref } = usePrefectures();
  return (
    <label className="flex cursor-pointer gap-2" htmlFor={prefecture.prefCode.toString()}>
      <input
        className="cursor-pointer"
        type="checkbox"
        id={prefecture.prefCode.toString()}
        value={prefecture.prefCode}
        name={prefecture.prefName}
        onChange={() => toggleSelectedPref(prefecture)}
      />
      {prefecture.prefName}
    </label>
  );
};
