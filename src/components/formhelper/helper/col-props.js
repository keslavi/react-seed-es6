
export const colProps= (props)=>{
  const {size, sx}=props;
  const ret={};
  if (size) ret.size=size;
  if (sx) ret.sx=sx;
  return ret;
}