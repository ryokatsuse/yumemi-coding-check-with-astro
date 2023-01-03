import { API_URL_PREFECTURES, API_URL_POPULATION } from './../config/index';

export const fetchPrefectures = async (): Promise<Response> => {
  return await fetch(API_URL_PREFECTURES, {
    headers: {
      'X-API-KEY': `${import.meta.env.PUBLIC_API_KEY}`,
    },
  });
};

export const fetchPopulation = async (prefCode: number): Promise<Response> => {
  return await fetch(`${API_URL_POPULATION}?prefCode=${prefCode}&cityCode=-`, {
    headers: {
      'X-API-KEY': `${import.meta.env.PUBLIC_API_KEY}`,
    },
  });
};
