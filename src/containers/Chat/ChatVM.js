import React, { useCallback, useState } from 'react';
import ChatV from './ChatV';

const ChatVM = () => {
  const [dataForm, setDataForm] = useState({
    typePublish: '',
    date: '',
  });

  const onSelectDate = useCallback((date) => {
    setDataForm({ ...dataForm, date });
  }, [dataForm]);

  const onSelectRadio = useCallback((e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  }, [dataForm]);

  console.log('dataForm: ', dataForm)
  return (
    <ChatV
      dataForm={dataForm}
      onSelectRadio={onSelectRadio}
      onSelectDate={onSelectDate}
    />
  )
};

export default ChatVM;