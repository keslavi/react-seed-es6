import {clone} from "@/helpers";
export const cleanParentProps = (props) => {
  const ret=clone(props);
  const exclude= ["xs","sm","md","lg","xl","label","options"];
  //stripping the Col variants out of the base control properties
  exclude.forEach(key=>{
    if(ret[key]){
      delete ret[key];
    }
  });
  if(props.label){
    ret.placeholder=props.label;
  }
       
  return ret;

  // const check =
  //   "value,control,useController,tooltipId,checkbox,datepicker,viewMode,readOnly,maxLength";

  // //const ret = { Inputprops: {}, inputProps: {} };
  // const ret = {inputprops:{}};
  // const propKeys = Object.keys(props);

  // propKeys.forEach((key) => {
  //   if (!check.includes(key)) {
  //     ret[key] = props[key];
  //   }
  // });

  // if (propKeys.includes("maxLength")) {
  //   ret.inputprops["maxLength"] = props.maxLength;
  // }

  // ret["disabled"] = props.viewMode || props.readOnly;

  // return ret;
};