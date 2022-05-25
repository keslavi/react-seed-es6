import React, { useRef, InputRef, useState } from "react";
import { Controller } from "react-hook-form";
import _ from "lodash";
import { Col } from "components/grid";

export const Input = (props) => {
  const {
    checkbox,
    datepicker,
    select,
    name,
    options,
    multioptions,
    tooltipId,
    value,
    control,
    label,
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

  //const Ctl=CtlTextField;

  return (
    <>
      <Col xs={xs || 4}>
        <Controller
          name={name}
          defaultValue={value}
          value={value}
          control={control}
          render={({ field }) => (
            <Ctl
              {...field}
              {...childProps}
              InputRef={InputRef}
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
    "value,control,tooltipId,checkbox,datepicker,viewMode,readOnly,maxLength";
  const ret = { Inputprops: {}, inputProps: {} };
  const propKeys = Object.keys(props);

  propKeys.forEach((key) => {
    if (!check.includes(key)) {
      ret[key] = props[key];
    }
  });

  if (propKeys.includes("maxLength")) {
    ret.inputProps["maxLength"] = props.maxLength;
  }

  ret["disabled"] = props.viewMode || props.readOnly;

  return ret;
};

const CtlTextField = (props) => {
  const label = props.label || props.name;
  return (
    <>
      <label>{label}</label>
      <br />
      <input {...props} />
    </>
  );
};

const CtlDate = (props) => {
  return <span>not implemented</span>;
};
const CtlCheckbox = (props) => {
  return <span>not implemented</span>;
};
const CtlSelect = (props) => {
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
