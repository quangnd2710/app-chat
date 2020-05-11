import React, {} from 'react';
import Input from 'components/Input';
import DatePicker from 'react-datepicker';
import { Row, Col } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
const GroupSelect = ({ name, value, onChange, selectDate }) => {

  return (
    <>
      <Col xs="3">
        <p>Publish date</p>
      </Col>
      <Col xs="9">
        <Input type="radio" id="exampleCustomRadio" name={name} value={"now"} onChange={onChange} label="Publish now" />
        <Row>
          <Col xs="12">
            <Input type="radio" id="exampleCustomRadio2" name={name} value={"schedule"} onChange={onChange} inline/>
            <DatePicker
              dateFormat="MM/DD/YYYY"
              onChange={date => selectDate(date)}
              placeholderText="MM/DD/YYYY"
            />
            <DatePicker
              onChange={date => selectDate(date)}
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
