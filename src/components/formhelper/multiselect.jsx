import { useEffect } from "react";
import { useController } from "react-hook-form";
//import { TextField as MuiTextField } from "@mui/material";
import { cleanParentProps, colProps } from "./helper";
import { Col } from "components/grid";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

export const Multiselect = (props) => {
  const { optionsMulti, name, label } = props;

  useEffect(() => {
    if (isEmpty(optionsMulti)) {
      toast.error(
        `!Dev: ${name}-${label} field: Autocomplete expects optionsMulti:[{key,text}]`
      );
    }
  });

  const {field,fieldState}=useController(props);

  return (
    <Col {...colProps(props)}>
      {name}-{label} multiselect not implemented
    </Col>
  )

};
