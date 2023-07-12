/****************************************
 *              IMPORTS                 *
 * **************************************/
//PINIA
import { defineStore } from 'pinia';
//DATA
import dataAccueil from '../data/data_accueil.json';

export const useAccueilStore = defineStore('AccueilStore', {
  //State
  state: () => {
    return {
      dataAccueil,
    };
  },
});

