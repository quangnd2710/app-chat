import React from 'react';
import { Container } from 'reactstrap';

const FormBody = ({ title, onClick, logo }) => {

  return (
    <Container className="form-body">
      <div className="chat-body">
        <span onClick={onClick}>{title || 'test'}</span>
        {logo}
      </div>
    </Container>
  )

};

export default FormBody;
