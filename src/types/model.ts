export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureResponse = { prefCode: number; prefName: string }[];

export type PopulationResponse = { year: number; value: number }[];
export type PopulationGraphData = { pref: Prefecture; valueSeries: PopulationResponse };
