import { create } from "zustand";
import { devtools } from "zustand/middleware";

import api from "./slice/api-slice"; //http request counter
import option from "./slice/option-slice";
import task from "./slice/task-slice";

export const useStoreDangerously = create(devtools((...a) => ({
    ...api(...a),//http request counter
    ...option(...a),
    ...task(...a),
  }))
);

export const useStore=useStoreDangerously;

const createSelectors= _store=>{
  const store=_store;
  store.use={};
  for (const k of Object.keys(store.getState())){
    store.use[k]=()=>store(s=>s[k]);
  }
  return store;
}

export const store=createSelectors(useStoreDangerously);
export default store;
