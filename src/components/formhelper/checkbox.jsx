import {
  Checkbox as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
  Typography,
  FormHelperText,
} from "@mui/material";

import { useController } from "react-hook-form";

import { color } from "@/theme-material";
import { cleanParentProps, colProps } from "./helper";


import { ColPadded } from "components/grid";
import { isTruthy } from "helpers";

export const Checkbox = (props) => {
  const placeholder = (e) => {
    return;
  };
  const onChange = props.onChange || placeholder;
  const onBlur = props.onBlur || placeholder;
  const variant = props.variant || "";

  const {
    field,
    fieldState: { error },
    //formState:{touchedFields, dirtyFields},
  } = useController({ ...props });

  const isChecked = () => {
    const v = field.value;
    return isTruthy(v);
  };

  let label = props.label || "";
  switch (variant) {
    case "h1":
      label = (
        <Typography
          style={{
            fontSize: "1.2rem",
            fontWeight: "500",
            color: color.primary.blue,
          }}
        >
          {label}
        </Typography>
      );
      break;
    case "h2":
      label = (
        <Typography style={{ fontWeight: "400", color: color.primary.blue }}>
          {label}
        </Typography>
      );
      break;
    case "h3":
      label = (
        <Typography
          style={{
            fontSize: ".8rem",
            fontWeight: "300",
            color: color.primary.blue,
          }}
        >
          {label}
        </Typography>
      );
      break;
  }

  const checked = isChecked();

  return (
    <ColPadded {...colProps(props)}>
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            id={field.name}
            name={field.name}
            onChange={(e) => {
              field.onChange(e.target.checked);
              onChange(e);
            }}
            onBlurCapture={(e) => {
              field.onBlur(e.target.checked);
              onBlue(e);
            }}
            checked={checked}
            color="success"
            {...cleanParentProps(props)}
          />
        }
        label={label}
        style={{ marginLeft: 0 }}
      />
      {error && (
        <FormHelperText className="mui-error">{error.message}</FormHelperText>
      )}
    </ColPadded>
  );
};
