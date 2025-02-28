import { isEmpty } from "lodash";

import { Checkbox } from "./checkbox";
import { Datepicker } from "./datepicker";
import { Multiselect } from "./multiselect";
import { Select } from "./select";
import { Radio } from "./radio";
import { SelectAutocomplete } from "./select-autocomplete";
import { Textarea } from "./textarea";
import { TextField } from "./text-field";

/**
 * @property {react-hook Form Input} multitype Input control (default TextField)
 *
 * - label="Text for label" (optional)
 *
 * add properties for different controls:
 *  - datepicker
 *  - options= {[value:"",text:""]} autocomplete
 *  - select options={} select
 *  - optionsMulti={} multi-select
 *  - allowFreeText options=[] autocomplete that allows free text
 *  * - xs={4} number of columns (optionsl, default 4)
 *  @param control required for react-hook-form
 *  @param name required
 *  @param value normally not needed, react-hook-form will fill this
 *  @param options returns autocomplete
 *  @param optionsMulti returns multiselect
 *  @param optionsRadio returns as radio buttons
 *  @param datepicker returns date control
 *  @param checkbox returns checkbox control
 *  @param textarea returns textarea
 *  @param xs={4} number of columns (optional, default 4)
 *  @returns {wrapped Form Input inside Col}
 */

export const Input = (props) => {
  const {
    checkbox,
    datepicker,
    options,
    optionsMulti,
    optionsRadio,
    select,
    textarea,
  } = props;

  const Ctl = datepicker
    ? Datepicker
    : checkbox
    ? Checkbox
    : !isEmpty(options)
    ? select
      ? Select
      : SelectAutocomplete
    : !isEmpty(optionsMulti)
    ? Multiselect
    : !isEmpty(optionsRadio)
    ? Radio
    : textarea
    ? Textarea
    : TextField;

  //const Ctl = TextField;

  return <Ctl {...props} />;
};
