/****************************************
 *              IMPORTS                 *
 * **************************************/
//PINIA
import { defineStore } from 'pinia';
//DATA
import dataReal from '../data/data_realisations.json';

export const useRealisationsStore = defineStore('RealisationsStore', {
  //State
  state: () => {
    return {
      dataReal,
    };
  },
});

