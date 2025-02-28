/**
 * 
 * @description creates a deep clone: alias for json.parse(stringify)
 */
export const clone = (obj) => {
  try {
    const ret=JSON.parse(JSON.stringify(obj));
    return ret;
  } catch(e){
    console.error("***couldn't clone: ", obj);
    throw e;
  }
}