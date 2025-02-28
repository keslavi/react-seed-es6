import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio as MuiRadio,
  RadioGroup,
} from "@mui/material";
import { cleanParentProps, colProps } from "./helper";

import { useController } from "react-hook-form";

import { ColPadded } from "components/grid";

export const Radio = (props) => {
  const options = props.optionsRadio;
  const placeholder = (e) => {
    return;
  };
  const onChange = props.onChange || placeholder;

  const {
    field,
    fieldState: { error /* invalid, isTouched, isDirty, */ },
    //formState: { touchedFields, dirtyFields }
  } = useController({
    ...props,
  });

  return (
    <ColPadded {...colProps(props)}>
      <FormControl>
        {props.label && <FormLabel>{props.label}</FormLabel>}
        <RadioGroup
          id={field.name}
          name={field.name}
          row={props.row}
          label={label}
          onBlur={field.onBlur}
          onChange={(e) => {
            field.onChange(e.target.value);
            onChange(e);
          }}
          value={field.value || ""}
        >
          {options.map((x) => (
            <FormControlLabel
              key={x.key}
              value={x.value}
              control={<MuiRadio />}
              label={<>{x.text}&nbsp;&nbsp;&nbsp;&nbsp;</>}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </ColPadded>
  );
};
