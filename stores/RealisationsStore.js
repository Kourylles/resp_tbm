/****************************************
 *              IMPORTS                 *
 * **************************************/
//PINIA
import { defineStore } from 'pinia';
//DATA
import realisations from '@/data/data_objets.json';

const useRealisationsStore = defineStore('RealisationsStore', {
  //State
  state: () => {
    return {
      realisations,
    };
  },
});

export default useRealisationsStore;
