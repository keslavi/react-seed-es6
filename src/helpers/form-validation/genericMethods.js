import * as yup from 'yup';
import r from './regex';
import { isEmpty } from 'lodash';
/*
README  
add extended, named custom functions to yup.string

copy/paste this for each new method to add. 
suggest keeping newest on top instead of bottom

*/
const val={i:0};
yup.addMethod(yup.string,"isTemplate",function(){
  return this
  //.min(3,'too') //we can do several layers of yup validation, including custom
  .test(
    "subject-custom",
    "custom function error message",
    (value)=>{
      //we can do whatever here to validate
      return false;
    }
  )  
})

yup.addMethod(yup.string,"required",function(message){
  return this
  .test(
    "subject-custom",
    message,
    (value)=> window.isDraft!==true ? !isEmpty(value) : true
  )  
})

/*
  trim and remove all non printable characters.
  this doesn't change the FIELD, it changes submit KVP
*/
yup.addMethod(yup.string, "trim2",function(){
  return this
    .trim()
    .transform(value=>value.replace(/[^ -~]+/g, "*"))
})

yup.addMethod(yup.string,"isCurrency",function(){
  return this
    .required()
    .matches(r.currency.pattern,r.currency.message)
})

export default yup;


