import { useState } from "react";
import { cleanParentProps, colProps } from "./helper";
import { useController } from "react-hook-form";
import { TextField as MuiTextField, Select as MuiSelect } from "@mui/material";

import { ColPadded } from "@/components/grid";

export const Select = (props) => {
  const placeholder = (e) => {
    return;
  };
  const onBlur = props.onBlur || placeholder;
  const onChange = props.onChange || placeholder;
  const options = props.options;
  //const onKeyDown = props.onKeyDown || placeholder;

  const {
    field,
    fieldState: { error /* invalid, isTouched, isDirty, */ },
    //formState: { touchedFields, dirtyFields }
  } = useController({
    ...props,
  });

  return (
    <ColPadded {...colProps(props)}>
      <MuiTextField
        id={field.name}
        name={field.name}
        label={props.label}
        fullWidth
        select
        slotProps={{
          select: {
            native: true,
          },
        }}
        onBlur={(e) => {
          field.onBlue(e.target.value);
          onBlur(e);
        }}
        onChange={(e) => {
          field.onChange(e.target.value);
          onChange(e);
        }}
        value={field.value || ""}
        {...{ error: !!error || undefined, helperText: error?.message }}
        {...cleanParentProps(props)}
      >
        {options.map((x) => (
          <option key={x.key} value={x.key}>
            {x.text}
          </option>
        ))}
      </MuiTextField>
    </ColPadded>
  );
};
