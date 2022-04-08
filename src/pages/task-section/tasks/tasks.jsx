import React, {useEffect} from 'react';
import {Row,Col} from 'components';

const tasks = (props) => {
  return (
    <div>
      <h4>Tasks</h4>
      <Row>
        <Col>a</Col>
        <Col>b</Col>
      </Row>

    </div>
  );
}

export const Tasks = tasks; //connected component
export default Tasks;