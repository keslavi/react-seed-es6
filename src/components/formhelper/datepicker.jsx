import { TextField as MuiTextField } from "@mui/material";
import { cleanParentProps, colProps } from "./helper";

import { useController } from "react-hook-form";

import { ColPadded } from "components/grid";
import dayjs from "dayjs";
import { isEmpty } from "lodash";

export const Datepicker = (props) => {
  const placeholder = (e) => {
    return;
  };
  const onChange = props.onChange || placeholder;

  const {
    field,
    fieldState: { error },
    //formState:{touchedFields, dirtyFields},
  } = useController({ ...props });

  const attributes = { inputProps: {} };
  if (!isEmpty(props.min)){
    attributes.inputProps.min=dayjs(props.min).format('YYYY-MM-DD');
  }
  if (!isEmpty(props.max)){
    attributes.inputPorts.max=dayjs(props.max).format('YYYY-MM-DD');
  }

  return (
    <ColPadded {...colProps(props)}>
      <MuiTextField
        {...cleanParentProps(props)}
        type="date"
        id={field.name}
        label={props.label}
        inputRef={field.ref}
        onBlur={field.onBlur}
        onChange={(e)=>{field.onChange(e.target.value);onChange(e);}}
        value={field.value || ''} //avoid uncontrolled ref error
        {...attributes} //note.. NOT <Input {...attributes} /> :)
        fullWidth
        {...{error: !!error || undefined, helperText: error?.message}}
      />
    </ColPadded>
  )

};
