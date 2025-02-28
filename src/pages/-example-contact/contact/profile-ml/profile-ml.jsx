/* eslint-disable react/prop-types */
import { Row, Col, Input } from "components";

export const ProfileMl = (props) => {
  const { attributes, item, option } = props;

  //don't let it go further if it's not ml
  if (item.profile!=='ml') return ("");

  return (
    <>
      <Row>
        <Col xs={12}>
          Now we put whatever controls and html needed for the ml profile
        </Col>
      </Row>
      <Row>
        <Input
          name="profileKey"
          label="profile ml"
          options={option.profileKeyMl}
          {...attributes}
        />
      </Row>
    </>
  );
};
