import {isEmpty} from 'lodash';

export const errorSlice=(set,get) => ({
  errors:[],
  errorAdd:(message,error)=>{
    const errors=get().errors;
    const isDuplicate=errors.some(x=>x===message);
    if (!isDuplicate){
      errors.push(message);
      set ({errors}, undefined, "errorAdd");
    }    
  },
  errorDel:(id)=>{
    //id=message for now.
    let errors=get().errors;
    errors=errors.map(x=>x!==id);
    set ({errors},undefined, "errorDel;")
  },
  errorsClear:()=>{
    set ({errors: []});
  }
})