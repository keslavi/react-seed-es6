import {
  yup,
  yupResolver,
  //regex,
} from '@/helpers/form-validation';

export * from '@/helpers/form-validation/errorNotification';

const schema= yup.object().shape({
  id:yup.string().required("id is required"),
  nameLast: yup.string().required("Last name required"),
  nameFirst: yup.string().required("First name required"),
})

export const resolver=yupResolver(schema);
