import { useEffect } from "react";
import { cleanParentProps, colProps } from "./helper";
import { useController } from "react-hook-form";
import { Col } from "..";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

/*eslint react/prop-types: 0 */
export const Multiselect = (props) => {
  const { options, name, label } = props;
  useEffect(() => {
    if (isEmpty(options)) {
      toast.error(
        `!Dev: ${name}-${label}  field: Autocomplete expects options:[{key,text}]`
      );
    }
  });

  const renderOptions = () =>
    options.map((option) => (
      <option key={option.key} value={option.key}>
        {option.text}
      </option>
    ));

  const { field, fieldState } = useController(props);
  return (
    <Col {...colProps(props)}>
      {label && <label>{label}</label>}<br/>
      <select {...cleanParentProps(props)} {...field}>
        <option>&nbsp;</option>
        {renderOptions()}
      </select>
      <br /><label className="validation-error-message">not implemented</label>   {fieldState.error && (
        <label className="validation-error-message">
          <br />
          {fieldState.error.message}
        </label>
      )}
    </Col>
  );
};
