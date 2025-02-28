import { useEffect } from "react";
import { isEmpty } from "lodash";
import { NavLink } from "react-router-dom";
import { Col, Row } from "components";
import { store, useStore } from "@/store";

import { TextareaDebug } from "components";

const optionText = (option, key) => {
  const ret = option.find((x) => x.key == key).text;
  return ret;
};

export const Tasks = () => {
  const option = store.use.option();
  const taskList = store.use.taskList();
  const items = store.use.tasks();

  useEffect(() => {
    taskList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItems = (data) => {
    return items.map((item) => (
      <tr key={item.id}>
        <td>
          <NavLink to={`/dev/tasks/${item.id}`}>{item.id}</NavLink>
        </td>
        <td>{item.subject}</td>
        <td>{item.body}</td>
        <td>{optionText(option.task.status, item.status)}</td>
        <td>{optionText(option.task.result, item.result)}</td>
      </tr>
    ));
  };

  if (isEmpty(items) || isEmpty(option)) return <>Loading...</>;

  return (
    <Row>
      <Col xs={12}>
        <div>
          <h4>Tasks</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Body</th>
              <th>Status</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>{renderItems(items)}</tbody>
        </table>
        {/* <TextareaDebug value={{option,tasks}} /> */}
      </Col>
    </Row>
  );
};
export default Tasks;
