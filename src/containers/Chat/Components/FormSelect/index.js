import React, { useCallback, useState } from 'react';
import Headers from './Header';
import FormBody from './FormBody';
import './style.scss';
import { Container } from 'reactstrap';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


const listIcon = [
  { icon: <InsertEmoticonIcon />, title: 'emoji', titleBody: 'Select Emoji' }
];
const FormSelect = ({ isSchedule, onSubmit, onSaveDraft }) => {
  const [contentBody, setContentBody] = useState({ title: 'emoji', icon: <InsertEmoticonIcon />, titleBody: 'Select Emoji' });
  const onSelectContent = useCallback((content) => {
    console.log('content: ', content);
    const selectedContent = listIcon.find((icon) => icon.title === content) || {};
    setContentBody(selectedContent);
  }, []);

  return (
    <Container>
      <Headers onClick={onSelectContent} listIcon={listIcon} />
      <FormBody title={contentBody.titleBody} logo={contentBody.icon}/>
    </Container>
  )
};

export default FormSelect;
