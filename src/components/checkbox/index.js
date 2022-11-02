import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

function Checkbox({ value, onChange }) {
  return (
    <label className='Item-button-like'>
      <input type='checkbox' checked={value} onChange={onChange}/>
      <i className='fa-solid fa-heart'></i>
    </label>
  )
}

Checkbox.propTypes = {
  value: propTypes.bool,
  onChange: propTypes.func,
}

Checkbox.defaultProps = {
  value: false,
  onChange: () => {},
}

export default React.memo(Checkbox);
