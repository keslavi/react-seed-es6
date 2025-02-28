import {
  TextField as MuiTextField,
  Autocomplete as MuiAutocomplete,
} from "@mui/material";

import { cleanParentProps, colProps } from "./helper";
import { Info } from "./info";

import { useController } from "react-hook-form";
import { ColPadded } from "@/components/grid";
import { KeyboardArrowDown } from "@mui/icons-material";

export const SelectAutocomplete = (props) => {
  const placeholder = (e) => {
    return;
  };

  const onChange = props.onChange || placeholder;
  // const textPleaseSelect=props.textPleaseSelect || "Please Select";
  // const options= [{key:"",text:textPleaseSelect},...props.options];
  const options = props.options;

  const {
    field,
    fieldState: { error /* invalid, isTouched, isDirty, */ },
    //formState: { touchedFields, dirtyFields }
  } = useController({
    ...props,
  });

  return (
    <ColPadded {...colProps(props)}>
      <MuiAutocomplete
        id={field.name}
        name={field.name}
        options={options}
        getOptionLabel={(option) => option.text || ""}
        onChange={(event, newValue) => {
          field.onChange(newValue ? newValue.key : "");
          onChange(event, newValue);
        }}
        onBlur={field.onBlur}
        value={options.find(
          (option) => option.key == field.value || options[0]
        )} //avoid uncontrolled ref errors
        fullWidth
        popupIcon={<KeyboardArrowDown />}
        renderInput={(params) => {
          return (
            <>
              <MuiTextField
                {...params}
                label={props.label}
                {...{ error: !!error || undefined, helperText: error?.message }}
                //placeholder={textPleaseSelect}
              />
              {props.info && <Info id={`${field.id}Info`} info={props.info} />}
            </>
          );
        }}
        {...cleanParentProps(props)}
      />
    </ColPadded>
  );
};
