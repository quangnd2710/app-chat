import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Headers = ({ title, components }) => (
  <div className="headers-children">
    {
      title ? (<p className="title-section">{title}</p>) : components
    }
  </div>
);

Headers.proptype = {
  title: PropTypes.string,
  components: PropTypes.object,
};

Headers.defaultProps = {
  title: '',
  components: {},
}

export default Headers;
