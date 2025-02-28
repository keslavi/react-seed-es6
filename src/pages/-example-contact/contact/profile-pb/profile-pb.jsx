/* eslint-disable react/prop-types */
import { Row, Col, Input } from "components";

export const ProfilePb = (props) => {
  const { attributes, item, option } = props;

  //don't let it go further if it's not ml
  if (item.profile!=='pb') return ("");

  return (
    <>
      <Row>
        <Col xs={12}>
          anything we need for the pb profile... different fields. note the dropdown has different values
        </Col>
      </Row>
      <Row>
        <Input
          name="profileKey"
          label="profile"
          options={option.profileKeyPb}
          {...attributes}
        />
      </Row>
    </>
  );
};