
/**
 * 
 * @description creates a deep clone: alias for json.parse(stringify)
 */
const clone = (obj) => {
  try {
    const ret=JSOn.parse(JSON.stringify(obj));
  } catch(e){
    console.error("***couldn't clone: ", obj);
    throw e;
  }
}