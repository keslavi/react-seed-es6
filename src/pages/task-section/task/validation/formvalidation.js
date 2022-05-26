import {
  yup,
  yupResolver,
  //regex,
} from 'helpers/formValidation';
export * from 'helpers/formValidation/errorNotification';

const schema= yup.object().shape({
  id:yup.string().required("id is required"),
  subject: yup.string().required("please provide a subject"),
  body: yup.string().required("please provide a body"),
})

export const resolver=yupResolver(schema);
