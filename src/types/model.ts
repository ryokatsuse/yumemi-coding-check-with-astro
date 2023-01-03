export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureResponse = { prefCode: number; prefName: string }[];

export type PopulationResponse = { year: number; value: number }[];
export type PopulationGraph = { pref: Prefecture; valueSeries: PopulationResponse };
