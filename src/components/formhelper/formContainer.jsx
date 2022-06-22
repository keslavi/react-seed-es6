//import {FormHTMLAttributes, FunctionComponent, PropsWithChildren} from 'react'
import { FormProvider, useForm/*, UseFormReturn*/ } from 'react-hook-form'
import { toast } from 'react-toastify';
import _ from 'lodash';

const toastId = 'idFormValidation';

const errorNotification = (errors) => {
    if (toast.isActive(toastId)) {
        toast.dismiss(toastId);
    }
    
    if (_.isEmpty(errors)) {
        return {}
    }

    let i = 0;
    const messages = Object.keys(errors).map((e) => (
        <span key={++i}>
            {errors[e].message}
            <br />
        </span>
    ));

    if (!_.isEmpty(messages)) {
        toast.warn(
            <div>{messages}</div>,
            {
                autoClose: false,
                toastId
            });
    }
}


const FormContainerCore = (props) => {
    const {
        children,
        defaultValues,
        FormProps,
        onSubmitSuccess,
        resolver,
    } = props;

    const methods = useForm({
        resolver,
        defaultValues,
    })

    const { handleSubmit } = methods

    errorNotification(methods.formState.errors);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitSuccess)} noValidate {...FormProps}>
                {children}
            </form>
        </FormProvider>
    )
}

export const FormContainer = (props) => {
    if (!props.formContext && !props.handleSubmit) {
        return <FormContainerCore {...props} />
    } else if (props.handleSubmit && props.formContext) {
        return (
            <FormProvider {...props.formContext}>
                <form
                    noValidate
                    {...props.FormProps}
                    onSubmit={props.handleSubmit}>
                    {props.children}
                </form>
            </FormProvider>
        )
    }
    if (props.formContext && props.onSubmitSuccess) {
        return (
            <FormProvider {...props.formContext}>
                <form
                    onSubmit={props.formContext.handleSubmit(props.onSubmitSuccess)}
                    noValidate
                    {...props.FormProps}
                >
                    {props.children}
                </form>
            </FormProvider>
        )
    }

    return (
        <div>
            Incomplete setup of FormContainer..
        </div>
    )
}

export default FormContainer;
