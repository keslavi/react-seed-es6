import { isEmpty } from "lodash";

import { DateField } from "./date-field";
import { Multiselect } from "./multiselect";
import { Select } from "./select";
import { Textarea } from "./textarea";
import { TextField } from "./text-field";

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
 *  @param options returns autocomplete 
 *  @param multioptions returns multiselect
 *  @param datepicker returns date control
 *  @param textarea returns textarea
 *  @param xs={4} number of columns (optional, default 4)
 *  @returns {wrapped Form Input}
 */
/*eslint react/prop-types: 0 */
export const Input = (props) => {
  const {
    //label,
    // checkbox,
    datepicker,
    multioptions,
    options,
    textarea,
  } = props;

  //ternary is most performant; this is hit a LOT.
  const Ctl = datepicker
    ? DateField
    : // : checkbox
    // ? CtlCheckbox
    // : select
    // ? Autocomplete
    !isEmpty(options)
    ? Select
    : !isEmpty(multioptions)
    ? Multiselect
    : textarea
    ? Textarea
    : TextField;
  return <Ctl {...props} />;
};
