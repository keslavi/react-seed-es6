import { forwardRef} from "react";
import { Controller } from "react-hook-form";
import {isEmpty} from "lodash";
import { cleanParentProps } from "./helper/clean-parent-props";




import { Col } from "@/components";

/**
 * @property {react-hook Form Input} multitype Input control (default TextField)
 * 
 * - label="text for label" (optional)
 * 
 * add properties for different controls:
 * - datepicker 
 * - options={ [{value:"",text:""}] } autocomplete
 * - select options={} select
 * - optionsMulti={} multi-select
 * - allowFreeText options={} autocomplete that allows free text
 *  * - xs={4} number of columns (optional, default 4)
 *  @param control required for react-hook-form
 *  @param name required
 *  @param value default filled from form defaultValues
 *  @param options
 *  @param multioptions
 *  @param select changes autocomplete to select
 *  @param checkbox
 *  @param onValueChange callback function
 *  @param datepicker
 *  @param xs={4} number of columns (optional, default 4)
 *  @returns {wrapped Form Input}
 */
export const Input = (props) => {
  const {
    //label,
    //tooltipId,
    checkbox,
    control,
    datepicker,
    defaultValue,
    multioptions,
    name,
    onValueChange,
    options,
    select,
    value,
  } = props;

  const xs = props.xs || 4;

  const childProps = cleanParentProps(props);

  //ternary is most performant; this is hit a LOT.
  const Ctl = datepicker
    ? CtlDate
    : checkbox
    ? CtlCheckbox
    : select
    ? CtlSelect
    : !isEmpty(options)
    ? CtlAutocomplete
    : !isEmpty(multioptions)
    ? CtlAutocompleteMulti
    : CtlTextField;

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

//export default Input;
/*eslint react/display-name:0 */
/*eslint react/prop-types: 0 */
const CtlTextField =forwardRef((props,ref) => {
  const label = props.label || props.name;
  return (
    <>
      <label>{label}</label>
      <br />
      <input {...props} ref={ref}/>
    </>
  );
});

const CtlDate = forwardRef((props,ref) => {
  return <span>not implemented</span>;
});
const CtlCheckbox = forwardRef((props,ref) => {
  return <span>not implemented</span>;
});
const CtlSelect = forwardRef((props,ref) => {
  return <span>not implemented</span>;
});

const CtlAutocomplete =  forwardRef((props,ref) => {
  const label = props.label || props.name;
  const options = props.options;

  return (
    <>
      <label>{label}</label>
      <br />
      <select {...props}>
        {options.map((o) => (
          <option 
            key={o.key} 
            value={o.key}
          >
            {o.text}
          </option>
        ))}
      </select>
    </>
  );
});

const CtlAutocompleteMulti = forwardRef((props,ref) => {
  return <span>not implemented</span>;
});