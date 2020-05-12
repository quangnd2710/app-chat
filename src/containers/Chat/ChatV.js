import React from 'react';
import GroupButton from './Components/GroupButton';
import GroupSelect from './Components/GroupSelect';
import FormSelect from './Components/FormSelect';

import { Row, Col, Container } from 'reactstrap';

const ChatV = ({ dataForm, onSelectRadio, onSelectDate }) => {
  return (
    <Container>
      <Row>
        <Col>
          <GroupButton title="test" isSchedule={dataForm.typePublish === 'schedule'} />
        </Col>
      </Row>
      <Row>
        <GroupSelect
          value={dataForm.typePublish}
          onChange={onSelectRadio}
          onSelectDate={onSelectDate}
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