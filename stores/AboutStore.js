/****************************************
 *              IMPORTS                 *
 * **************************************/
//PINIA
import { defineStore } from 'pinia';
//DATA
import dataAbout from '../data/data_about.json';

export const useAboutStore = defineStore('AboutStore', {
  //State
  state: () => {
    return {
      dataAbout,
    };
  },
});

