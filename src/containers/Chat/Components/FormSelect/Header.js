import React from 'react';
import IconButton from 'components/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const HeaderForm = ({ onClick }) => {
  const listIcon = [
    { icon: <InsertEmoticonIcon />, onClick, title: 'emoji' }
  ];
  return (
    <div className="header-form">
      {listIcon.map((icon) => <IconButton icon={icon.icon} onClick={icon.onClick} key={icon.title} />)}
    </div>
  )

};

export default HeaderForm;
