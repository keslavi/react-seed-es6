import { InputAdornment, TextField as MuiTextField } from "@mui/material";
import { cleanParentProps, colProps } from "./helper";
import { Info } from "./info";
import {
  useController,
  //useForm
} from "react-hook-form";
import { ColPadded } from "@/components/grid";
//import { BootstrapTooltip } from "./infotooltip";
import { Help /*HelpOutline*/ as Help } from "@mui/icons-material";
import { color } from "@/theme-material";
/*
to switch to bootstrap style:
https ://mui.com/material-ui/react-text-field/
“using the styled API react-bootstrap"
*/
export const TextField = (props) => {
  const placeholder = (e) => {
    return;
  };
  const onBlur = props.onBlur || placeholder;
  const onChange = props.onChange || placeholder;
  const unbound = props.unbound === "true" ? true : false;
  const {
    field,
    fieldState: { error /* invalid, isTouched, isDirty, */ },
    //formState: { touchedFields, dirtyFields }
  } = useController({
    ...props,
  });
  let valueProp = {};
  if (!props.defaultvalue) {
    if (!unbound) {
      valueProp = {
        value: field.value || "",
      };
    }
  }

  return (
    <ColPadded {...colProps(props)}>
      <MuiTextField
        id={field.name}
        name={field.name}
        label={props.label}
        inputRef={field.ref}
        onBlur={(e) => {
          field.onBlur(e.target.value);
          onBlur(e);
        }}
        onChange={(e) => {
          field.onChange(e.target.value);
          onChange(e);
        }}
        {...valueProp}
        {...{ error: !!error || undefined, helperText: error?.message }}
        {...cleanParentProps(props)}
      />
      {props.info &&  <Info id={`${field.id}Info`} info={props.info} />}      
      {/* {props.info &&  Info(`${field.id}Info`, props.info)}       */}
    </ColPadded>
  );
};
