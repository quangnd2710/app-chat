import React, { useCallback, useState } from 'react';
import Input from 'components/Input';
import DatePicker from 'react-datepicker';
import { Row, Col } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import './style.scss';

const GroupSelect = ({ onChange, onSelectDate }) => {
  const [newDate, setNewDate] = useState('');
  const [time, setTime] = useState('');

  const selectDate = useCallback((date) => {
    const dateSelect = new Date(date).toDateString();
    console.log('dateSelect: ', dateSelect);
    setNewDate(date);
  }, []);

  const selectTime = useCallback((date) => {
    console.log('date: ', date);
    const time = new Date(date).toLocaleTimeString();
    setTime(time);
    console.log('time: ', time);
  }, []);
  return (
    <>
      <Col xs="3">
        <p>Publish date</p>
      </Col>
      <Col xs="9">
        <Input type="radio" id="customRadio" name='typePublish' value={"now"} onChange={onChange} label="Publish now" />
        <Row>
          <Col xs="12" className="select-date">
            <Input type="radio" id="customRadio2" name='typePublish' value={"schedule"} onChange={onChange} inline />
            <DatePicker
              dateFormat="MM/DD/YYYY"
              onChange={date => selectDate(date)}
              placeholderText="MM/DD/YYYY"
            />
            <DatePicker
              onChange={date => selectTime(date)}
              placeholderText="00:00"
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </Col>
        </Row>
      </Col>
    </>
  )
};

export default GroupSelect;
