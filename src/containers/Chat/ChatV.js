import React from 'react';
import GroupButton from './Components/GroupButton';
import GroupSelect from './Components/GroupSelect';

import { Row, Col } from 'reactstrap';

const ChatV = ({ }) => {
  return (
    <>
      <Row>
        <Col>
          <GroupButton title="test" />
        </Col>
      </Row>
      <Row>
        <GroupSelect
          name="name"
          value={"test"}
          onChange={() => {}}
        />
      </Row>
    </>
  );
};

export default ChatV;