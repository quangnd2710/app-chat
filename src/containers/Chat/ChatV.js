import React from 'react';
import GroupButton from './Components/GroupButton';
import GroupSelect from './Components/GroupSelect';
import FormSelect from './Components/FormSelect';

import { Row, Col, Container } from 'reactstrap';

const ChatV = ({ }) => {
  return (
    <Container>
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
      <Row>
        <FormSelect
        />
      </Row>
    </Container>
  );
};

export default ChatV;