import {clone} from '@/helpers';

export const cleanParentProps=(props)=>{
  const ret = {...props};
  const exclude= [
    'name',
    "id",
    "info",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "label",
    "options",
    "optionsRadio",
    "optionsMulti",
    "datepicker",
    "checkbox",
    "onChange",
    "onBlur",
    "min",
    "max",
    "size",
  ];

  exclude.forEach(key=>{
    if (ret[key]){
      delete ret[key];
    }
  });

  if (props.label){
    ret.placeholder=props.label;
  }

  return ret;


}