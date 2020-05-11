import React from 'react';
import Section from 'components/Section';
import Button from 'components/Button';
import './style.scss';

const GroupButton = ({ isSchedule, onSubmit, onSaveDraft }) => {
  const components = (
    <form className="group-button" onSubmit={onSubmit}>
      <Button color="secondary" text="Save draft" onClick={onSaveDraft} />
      <Button text={ isSchedule ? "Schedule" : 'Submit'} type="submit" />
    </form>
  );
  return (
    <Section components={components} />
  )
};

export default GroupButton;
