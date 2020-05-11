import React from 'react';
import Headers from './Header';
import FormBody from './FormBody';
import './style.scss';
import { Container } from 'reactstrap';

const FormSelect = ({ isSchedule, onSubmit, onSaveDraft }) => {
  return (
    <Container>
      <Headers />
      <FormBody />
    </Container>
  )
};

export default FormSelect;
