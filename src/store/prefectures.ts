import type { PopulationGraph, Prefecture } from '../types/model';
import { atom } from 'nanostores';

export const selectedPopulationDataStore = atom<Prefecture[]>([]);

export const populationGraphStore = atom<PopulationGraph[]>([]);
