import React from 'react';
import IconButton from 'components/IconButton';

const HeaderForm = ({ onClick, listIcon }) => (
  <div className="header-form">
    {listIcon.map((icon) => <IconButton icon={icon.icon} onClick={() => onClick(icon.title)} key={icon.title} />)}
  </div>
);

export default HeaderForm;
