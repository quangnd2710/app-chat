import React from 'react';
import './style.scss';

const Icons = ({ icon, onClick }) => (
  <span className="icon-show" onClick={onClick}>
    {icon}
  </span>
);

export default Icons;
