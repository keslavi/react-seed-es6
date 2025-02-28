export const apiSlice=(set,get)=>({
  apiRequestCount:0,
  
  apiBeginRequest:()=>{
    let apiRequestCount=get().apiRequestCount;
    ++apiRequestCount;
    set({apiRequestCount},undefined, "apiBeginRequest");
  },
  apiEndRequest:()=>{
    let apiRequestCount=get().apiRequestCount;
    --apiRequestCount;
    if (apiRequestCount<0){
      apiRequestCount=0;
    }
    set({apiRequestCount},undefined, "apiBeginRequest");
  }
  
})
export default apiSlice;

