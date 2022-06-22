import React, {forwardRef,
  //  useRef, 
  //  InputRef, 
  //  useState 
} from "react";
import { Controller } from "react-hook-form";
import _ from "lodash";
import { Col } from "components/grid";

import { TextField, MenuItem,Autocomplete} from '@mui/material'

export const Input = (props) => {
  const {
    checkbox,
    datepicker,
    select,
    name,
    options,
    multioptions,
    //tooltipId,
    value,
    control,
    //label,
    onValueChange,
  } = props;

  const xs = props.xs || 4;

  const childProps = cleanParentProps(props);

  const Ctl = datepicker
    ? CtlDate
    : checkbox
      ? CtlCheckbox
      : select
        ? CtlSelect
        : !_.isEmpty(options)
          ? CtlAutocomplete
          : !_.isEmpty(multioptions)
            ? CtlAutocompleteMulti
            : CtlTextField;

  //InputRef={InputRef}
  //render={({ field }) => (
  return (
    <>
      <Col xs={xs || 4}>
        <Controller
          name={name}
          defaultValue={value}
          value={value}
          control={control}
          render={({ field, fieldState }) => (
            <Ctl
              {...field}
              {...childProps}
              onChange={(value2) => {
                field.onChange(value2);
                if (typeof onValueChange === "function") {
                  onValueChange(name);
                }
              }}
            />
          )}
        />
      </Col>
    </>
  );
};

export default Input;

const cleanParentProps = (props) => {
  const check =
    "value,control,useController,tooltipId,checkbox,datepicker,viewMode,readOnly,maxLength";

  //const ret = { Inputprops: {}, inputProps: {} };
  const ret = { inputprops: {} };
  const propKeys = Object.keys(props);

  propKeys.forEach((key) => {
    if (!check.includes(key)) {
      ret[key] = props[key];
    }
  });

  if (propKeys.includes("maxLength")) {
    ret.inputprops["maxLength"] = props.maxLength;
  }

  ret["disabled"] = props.viewMode || props.readOnly;

  ret.size="small";

  return ret;
};



// forwardRef warnings: https://mui.com/material-ui/guides/composition/
const CtlTextField = forwardRef((props,ref) => {
  const {
    name,
    //label,
    value,
    onChange,
    onBlur,
    type,
    ...rest
  } = props;

  return (
    <>
      <TextField
        {...rest}
        ref={ref}
        name={name}
        value={value ?? ''}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
    </>
  );
});


const CtlSelect = forwardRef((props,ref) => {
  const {
    name,
    //label,
    value,
    onChange,
    onBlur,
    type,
    options,
    ...rest
  } = props;

  if (type === 'number' && typeof value !== 'undefined') {
    rest.InputLabelProps = rest.InputLabelProps || {}
    rest.InputLabelProps.shrink = true
  }

  return (
    <>
      <TextField
        select
        {...rest}
        ref={ref}
        name={name}
        value={value ?? ''}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      >
        {options.map((o) => (
          <MenuItem key={`status${o.value}`} value={o.value}>
            {o.text}
          </MenuItem>
        ))}        
      </TextField>
    </>
  );
});


const CtlDate = (props) => {
  return <span>not implemented</span>;
};
const CtlCheckbox = (props) => {
  return <span>not implemented</span>;
};

const CtlAutocomplete = (props) => {
  const label = props.label || props.name;
  const options = props.options;

  return (
    <>
      <label>{label}</label>
      <br />
      <select {...props}>
        {options.map((o) => (
          <option
            key={o.value}
            value={o.value}
          >
            {o.text}
          </option>
        ))}
      </select>
    </>
  );
};
const CtlAutocompleteMulti = (props) => {
  return <span>not implemented</span>;
};
