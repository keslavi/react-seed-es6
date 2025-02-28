import { toast } from "react-toastify";
import {isEmpty}from "lodash";

const toastId = "idFormValidation";

export const errorNotification = (errors) => {
  if (isEmpty(errors)) {
    return {};
  }

  const messages=[];

  const extractMessages=(errors) =>{
    if (!errors ||typeof (errors)!== "object") return;
    for (const prop in errors) {
      if (prop==="message") {
        messages.push(errors[prop])
      } else {
        extractMessages(errors[prop])
      }
    }
  }

  extractMessages(errors);

  const toastMessages= messages.map((m,i)=>
    <span key={i}>{m}<br/></span>
  )


  if (toast.isActive(toastId)) {
    toast.dismiss(toastId);
  }

  if (!isEmpty(messages)) {
    toast.warn(<div>{toastMessages}</div>, {
      //autoClose: false,
      toastId,
    });
  }
};

export default errorNotification;
